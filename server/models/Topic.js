import mongoose from 'mongoose'

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  order: { type: Number, default: 0 },
})

export default mongoose.model('Topic', topicSchema)
