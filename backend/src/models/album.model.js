import mongoose from "mongoose";

const albumSchema = new mongoose.Schema({

    tittle:{ type: 'string',required: true},
    artist:{ type: 'string',required: true},
    imageUrl:{ type: 'string',required: true},
    releaseyear:{ type: 'Number',required:true},
    songs:[{ type:mongoose.Schema.Types.ObjectId,ref: 'songs' }]




}, { timestamps: true });
 

export const Album = mongoose.model('Album', albumSchema);