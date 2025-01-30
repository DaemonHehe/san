const mongoose = require("mongoose");

var brandSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Path `title` is required."],
      unique: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
