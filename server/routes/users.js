import express from 'express'
import {
  getUserProfile,
  updateUserProfile,
  getUserById,
  searchUsers,
  getLeaderboard,
} from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// All user routes require authentication except public profile and search
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)

router.get('/search', searchUsers)
router.get('/leaderboard', getLeaderboard)
router.get('/:id', getUserById)

export default router