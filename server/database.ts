import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017/express-mongo', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const shortUrlSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    unique: true
  },
  fullUrl: {
    type: String,
    required: true
  }
});

export const ShortUrlModel = mongoose.model('item', shortUrlSchema);