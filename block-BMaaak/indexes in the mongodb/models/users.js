const mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    index: true,
    unique: true,
  },
  email: {
    type: String,
    index: true,
    unique: true,
  },
  address: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    pin: {
      type: Number,
    },
  },
});

// compound insex on the state and country fied inside the address field
userSchema.index({ "address.state": 1, "address.country": 1 },{unique : true});