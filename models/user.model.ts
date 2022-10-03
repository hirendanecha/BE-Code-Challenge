import mongoose, { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  pass: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String },
  pass: { type: String },
});

let userModel = mongoose.model<IUser>('users', UserSchema);

export default userModel;