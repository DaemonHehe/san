import { Schema, model } from "mongoose";

var blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Path `title` is required."],
    },
    description: {
      type: String,
      required: [true, "Path `content` is required."],
    },
    category: {
      type: String,
      required: [true, "Path `category` is required."],
    },
    numViews: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: false,
    },
    isDisliked: {
      type: Boolean,
      default: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    dislikes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    image: {
      type: String,
      default:
        "https://th.bing.com/th/id/OIP.cRZoxgfjQUtQ6Hvvf9n14wHaE8?rs=1&pid=ImgDetMain",
    },
    author: {
      type: String,
      default: "Admin",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
  }
);

export default model("Blog", blogSchema);
