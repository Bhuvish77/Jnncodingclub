import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rollNumber: { type: String },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  
  // Profile fields
  department: { type: String },
  year: { type: String, enum: ['1', '2', '3', '4', '5'] },
  bio: { type: String, maxlength: 500 },
  avatar: { type: String },
  skills: [{ type: String }],
  github: { type: String },
  linkedin: { type: String },
  portfolio: { type: String },
  achievements: [{ type: String }],
  
  // Gamification fields
  points: { type: Number, default: 0 },
  
  // DSA tracking fields (preserved for existing functionality)
  streak: { type: Number, default: 0 },
  totalSolved: { type: Number, default: 0 },
}, { timestamps: true })

// Index for efficient queries
userSchema.index({ email: 1 })
userSchema.index({ rollNumber: 1 })
userSchema.index({ points: -1 })

export default mongoose.model('User', userSchema)
