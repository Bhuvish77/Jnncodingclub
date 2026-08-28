import User from '../models/User.js'

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password')
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Update only allowed fields
    const allowedFields = [
      'name', 'department', 'year', 'bio', 'skills', 
      'github', 'linkedin', 'portfolio', 'achievements'
    ]

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        user[field] = req.body[field]
      }
    })

    const updatedUser = await user.save()

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      role: updatedUser.role,
      department: updatedUser.department,
      year: updatedUser.year,
      bio: updatedUser.bio,
      avatar: updatedUser.avatar,
      skills: updatedUser.skills,
      github: updatedUser.github,
      linkedin: updatedUser.linkedin,
      portfolio: updatedUser.portfolio,
      achievements: updatedUser.achievements,
      points: updatedUser.points,
      streak: updatedUser.streak,
      totalSolved: updatedUser.totalSolved,
      rollNumber: updatedUser.rollNumber,
      createdAt: updatedUser.createdAt,
      updatedAt: updatedUser.updatedAt,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// @desc    Get user by ID (public profile)
// @route   GET /api/users/:id
// @access  Public
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select(
      '-password -email -role'
    )

    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    res.json(user)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// @desc    Search users
// @route   GET /api/users/search
// @access  Public
export const searchUsers = async (req, res) => {
  try {
    const { query, page = 1, limit = 10 } = req.query

    if (!query) {
      return res.status(400).json({ message: 'Search query is required' })
    }

    const searchRegex = new RegExp(query, 'i')

    const users = await User.find({
      $or: [
        { name: searchRegex },
        { skills: searchRegex },
        { department: searchRegex },
      ],
    })
      .select('-password -email -role')
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ name: 1 })

    const count = await User.countDocuments({
      $or: [
        { name: searchRegex },
        { skills: searchRegex },
        { department: searchRegex },
      ],
    })

    res.json({
      users,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalUsers: count,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

// @desc    Get leaderboard
// @route   GET /api/users/leaderboard
// @access  Public
export const getLeaderboard = async (req, res) => {
  try {
    const { 
      type = 'global', 
      page = 1, 
      limit = 10 
    } = req.query

    let dateFilter = {}
    
    if (type === 'weekly') {
      const oneWeekAgo = new Date()
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
      dateFilter = { updatedAt: { $gte: oneWeekAgo } }
    } else if (type === 'monthly') {
      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      dateFilter = { updatedAt: { $gte: oneMonthAgo } }
    }

    const users = await User.find(dateFilter)
      .select('-password -email -role')
      .sort({ points: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)

    const count = await User.countDocuments(dateFilter)

    // Add rank to each user
    const rankedUsers = users.map((user, index) => ({
      ...user.toObject(),
      rank: (page - 1) * limit + index + 1,
    }))

    res.json({
      users: rankedUsers,
      currentPage: page,
      totalPages: Math.ceil(count / limit),
      totalUsers: count,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}