const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  username: {
    type: String
  },
  reactionBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;