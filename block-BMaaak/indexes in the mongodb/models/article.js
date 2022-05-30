const mongoose = require("mongoose");
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: [String],
});

// mutlikey indexes on the tags which is an arrays of the string
articleSchema.index({ tags: 1 });
// Update text indexes to include descriptions as well. Implement text indexes on both title and description
// articleSchema.createIndex({ title: "text" });
// articleSchema.createIndex({ description: "text" });
articleSchema.review.createIndex({ title: "text", description: "text" });