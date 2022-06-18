import mongoose from "mongoose";

const friendRequestSchema = new mongoose.Schema(
  {
    fromId: {
      type: String,
      required: true,
    },
    toId: {
      type: String,
      required: true,
    },
    // status can be pending, accepted, rejected
    status: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("FriendRequest", friendRequestSchema);
