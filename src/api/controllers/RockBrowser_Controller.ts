import { Request, Response } from "express";
import FA_URLs from "../routes/FA_Routes";
//import * as request from "request";
import ax from "axios";
import * as http from "http";

export class RockBrowserController {

  public async searchAllMatches(req: Request, res: Response) {
    let passedRequest: Request = req.body as Request
    console.log(`passed request: ${passedRequest}`)
    let finalOutput =  await ax.post(FA_URLs.rockBrowserSearch, passedRequest).then(response => {
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

}

export const rockBrowserController = new RockBrowserController();