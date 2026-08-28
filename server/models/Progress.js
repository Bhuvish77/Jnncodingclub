import mongoose from 'mongoose'

const progressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  problem: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
  status: { type: String, enum: ['todo', 'attempted', 'solved'], default: 'todo' },
  solvedAt: { type: Date },
}, { timestamps: true })

progressSchema.index({ user: 1, problem: 1 }, { unique: true })

export default mongoose.model('Progress', progressSchema)
