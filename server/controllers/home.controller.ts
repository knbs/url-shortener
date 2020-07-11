import { Request, Response } from 'express';
import { ShortUrlModel } from '../database'
import uniqid from 'uniqid';

export const getAll = (req: Request, res: Response) => {
  ShortUrlModel.find({}, function(err, items) {
    res.json(items);
  });
};

export const create = (req: Request, res: Response) => {
  const newItem = {
    _id: uniqid.time(),
    fullUrl: req.body.fullUrl
  };

  const shortUrl = new ShortUrlModel(newItem);
  shortUrl.save().then(() => {
    res.json(newItem);
  }).catch((error) => {
    console.log(error);
  });
};
