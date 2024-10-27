const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    enum: ['work', 'personal', 'study', 'shopping', 'fitness', 'finance', 'social', 'chores', 'hobbies', 'urgent'],
    default: 'work' 
  },
  priority: { 
    type: String, 
    enum: ['low', 'medium', 'high', 'critical'], 
    default: 'medium' 
  },
  deadline: { 
    type: Date 
  },
  completed: { 
    type: Boolean, 
    default: false 
  },
  completedAt: { 
    type: Date 
  }
}, 
{ 
  timestamps: true // Automatically adds `createdAt` and `updatedAt`
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
