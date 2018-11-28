import { Request, Response } from "express";

export class FrontController {
  public testLA(req: Request, res: Response) {
    res.status(200).send({
      message: "GET request successful!!"
    });
  }
}

export const frontController = new FrontController();