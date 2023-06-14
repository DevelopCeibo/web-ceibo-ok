import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mail: { type: String, lowercase: true, required: true, unique: true },
    company: { type: String, lowercase: true },
    position: { type: String, lowercase: true },
    checked: { type: String, lowercase: true },
    subject: { type: String, lowercase: true }
  },
  { timestamps: true, versionKey: false }
);

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
