import mongoose from 'mongoose';
import { Request, Response } from 'express';

export default class Home {
  private shortUrlModel:mongoose.Model<any>;

  constructor(shortUrlModel:mongoose.Model<any>) {
    this.shortUrlModel = shortUrlModel;
  }

  public getAll = async (req: Request, res: Response) => {
    const items = await this.shortUrlModel.find({});
    res.json(items);
  }

  public create = async (req: Request, res: Response) => {
    const newItem = {
      fullUrl: req.body.fullUrl
    };
    try{
      throw new Error('oops');
      const shortUrl = new this.shortUrlModel(newItem);
      res.json(await shortUrl.save());
    } catch(error) {
      res.status(500).json(error.message)
      console.log(error)
    }
  }
}
