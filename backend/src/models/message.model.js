import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

   senderId: { type : 'string', required: true},
   receiverId: { type : 'string', required: true},
   content: { type : 'string', required: true},
   seen: { type : 'boolean', default: false},



}, { timestamps: true });
 

export const Message = mongoose.model('Message', messageSchema);