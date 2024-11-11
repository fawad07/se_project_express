const mongoose = require("mongoose");
const validator = require("validator");

// Define the ClothingItem schema
const clothingItemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 30,
    },
    weather: {
      type: String,
      required: true,
      enum: ['hot', 'warm', 'cold'],  // Only allows 'hot', 'warm', or 'cold'
    },
    imageUrl: {
      type: String,
      required: true,
      validate: {
        validator(value) {
          return validator.isURL(value);
        },
        message: 'You must enter a valid URL',
      } 
      /*{
        validator: function (v) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(v);  // Basic URL validation for images
        },
        message: (props) => `${props.value} is not a valid URL!`,
      }*/,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: [],
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });


module.exports = mongoose.model("item", "clothingItemScheme");