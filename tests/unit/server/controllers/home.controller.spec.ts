import Home from '../../../../server/controllers/home.controller'
import { ShortUrl } from '../../../../server/models/ShortUrlModel'
import mongoose from 'mongoose'
import { Request, Response } from 'express'

describe('Home controller test', () => {
  it('getAll test', async () => {
    const expectedParameter = [
      { shortId: 'kcy2it13', fullUrl: 'http://example.com/' },
      { shortId: 'kcy2it13', fullUrl: 'http://example2.com/' }
    ]
    const req: any = {}
    const res: any = {
      json: jest.fn().mockReturnValue(null)
    }
    const ShortUrlModel: any = {
      find: jest.fn().mockReturnValue(expectedParameter)
    }

    const home = new Home(ShortUrlModel)
    await home.getAll(req, res)
    expect(res.json).toBeCalledWith(expectedParameter)
  })

  it('create test', async () => {
    const req: any = {
      body: { fullUrl: 'http://example.com/' }
    }
    const res: any = {
      json: jest.fn().mockReturnValue(null)
    }
    ShortUrl.prototype.save = jest.fn().mockReturnValue(null)
    jest.spyOn(ShortUrl.prototype, 'save').mockImplementationOnce(() => Promise.resolve())

    const home = new Home(ShortUrl)
    await home.create(req, res)
    expect(res.json).toBeCalled()
  })
})
