import mongoose from 'mongoose';
import uniqid from 'uniqid';

export type ShortUrlModel = mongoose.Document & {
  shortId: string,
  fullUrl: string
}

const shortUrlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
    default: uniqid.time
  },
  fullUrl: {
    type: String,
    required: true
  }
})

export const ShortUrl = mongoose.model<ShortUrlModel>("ShortUrl", shortUrlSchema)