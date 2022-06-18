import mongoose from "mongoose";

const friendSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    friendsId: [
      {
        _id: false,
        type: String,
        required: true,
        unique: true,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Friend", friendSchema);
