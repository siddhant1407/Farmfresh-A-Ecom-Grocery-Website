const mongoose = require("mongoose") 
const crypto = require("crypto");
const uuidv1 = require("uuid/v1")

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true
    },
    lastname: {
      type: String,
      maxlength: 32,
      trim: true
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    address: {
      type: String,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    purchases: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);


userSchema.methods = {
  autheticate: function(plainpassword) {
    return plainpassword === this.password;
  },

  
};


module.exports = mongoose.model("User", userSchema);
