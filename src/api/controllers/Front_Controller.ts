import { Request, Response } from "express";
import LA_URLs from "../routes/LA_Routes";
import FA_URLs from "../routes/FA_Routes";
//import * as request from "request";
import ax from "axios";
import * as http from "http";

export class FrontController {
  public testLA(req: Request, res: Response) {
    res.status(200).send({
      message: "GET request successful!!"
    });
  }
  public async taggingFileProcess(req: Request, res: Response) {    
    let passedRequest = JSON.stringify(req.body)
    let finalOutput =  await ax.post(FA_URLs.taggingFileProcess, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      if (error.response) {
        switch(error.response.status){
          case 409:
            return error.response.data
            break;
          default:
            return {"error":"something went wrong."}
        }
      }
    });
    console.log(`await completed:` );
    console.dir(finalOutput, {depth: null, colors: true}) 
    res.json(finalOutput)
    
  }


  public async userValidation(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.userValidation, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      if (error.response) {
        switch(error.response.status){
          case 409:
            return error.response.data
            break;
          default:
            return {"error":"something went wrong."}
        }
      }
    });
    console.log(`await completed:` );
    console.dir(finalOutput, {depth: null, colors: true})
    res.json(finalOutput)
  }

  public async dataTaggingInit(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(LA_URLs.dataTaggingInit, passedRequest).then(response => {
      //console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      if (error.response) {
        switch(error.response.status){
          case 409:
            return error.response.data
            break;
          default:
            return {"error":"something went wrong."}
        }
      }
    });
    console.log(`await completed:` );
    console.dir(finalOutput, {depth: null, colors: true}) 
    res.json(finalOutput)
    //res.json("{\"test\":\"test\"}")
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
      if (error.response) {
        switch(error.response.status){
          case 409:
            return error.response.data
            break;
          default:
            return {"error":"something went wrong."}
        }
      }
    });
    console.log(`await completed:` );
    console.dir(finalOutput, {depth: null, colors: true}) 
    res.json(finalOutput)
    //res.json("{\"test\":\"test\"}")
  }

  public async projectCreation(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    console.log(LA_URLs.projectCreation)
    let finalOutput =  await ax.post(LA_URLs.projectCreation, passedRequest).then(response => {
      console.log(`response data: ${response.data}`);
      //console.log(response.data.explanation);
      return response.data
    })
    .catch(error => {
      if (error.response) {
        switch(error.response.status){
          case 409:
            return error.response.data
            break;
          default:
            return {"error":"something went wrong."}
        }        
        //console.log(error.response.data);
        //console.log(error.response.status);
        //console.log(error.response.headers);
      }
     // console.log(`Status code-----> ${error.response}`)
     // console.log(`error: ${error}`);
      //return error
    });
    console.log(`await completed:` );
    console.dir(finalOutput, {depth: null, colors: true}) 
    res.json(finalOutput)
  }
}

export const frontController = new FrontController();