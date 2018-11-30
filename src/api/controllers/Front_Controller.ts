import { Request, Response } from "express";
import LA_URLs from "../routes/LA_Routes";
import FA_URLs from "../routes/FA_Routes";
import ax from "axios";

export class FrontController {
  public testLA(req: Request, res: Response) {
    res.status(200).send({
      message: "GET request successful!!"
    });
  }
  public async getTaggingForm(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(FA_URLs.getTaggingForm, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      //console.log(`error: ${error}`);
      return error
    });
    console.log(`await completed: ${finalOutput}` ); 
    res.json(finalOutput)
  }

  public async dataTaggingReq1(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.dataTaggingReq1, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      //console.log(`error: ${error}`);
      return error
    });
    console.log(`await completed: ${finalOutput}` ); 
    res.json(finalOutput)
  }

  public async dataTaggingReq2(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.dataTaggingReq2, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      //console.log(`error: ${error}`);
      return error
    });
    console.log(`await completed: ${finalOutput}` ); 
    res.json(finalOutput)
  }

  public async projectInit(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.projectInit, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      //console.log(`error: ${error}`);
      return error
    });
    console.log(`await completed: ${finalOutput}` ); 
    res.json(finalOutput)
  }

  public async projectCreation(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.projectCreation, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      //console.log(`error: ${error}`);
      return error
    });
    console.log(`await completed: ${finalOutput}` ); 
    res.json(finalOutput)
  }

}

export const frontController = new FrontController();