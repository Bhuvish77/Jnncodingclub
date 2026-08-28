import mongoose from 'mongoose'

const problemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  topic: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
  difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
  link: { type: String },
  tags: [{ type: String }],
  order: { type: Number, default: 0 },
})

export default mongoose.model('Problem', problemSchema)
