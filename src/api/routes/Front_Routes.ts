import * as express from "express";
import { frontController } from "../controllers/Front_Controller";

class FrontRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.get("/testLA/", (req: express.Request, res: express.Response) =>
      frontController.testLA(req, res)
    );
    this.router.post("/getTaggingForm/", (req: express.Request, res: express.Response) => 
      frontController.getTaggingForm(req, res)    
    );
    this.router.post("/dataTaggingReq1/", (req: express.Request, res: express.Response) =>
      frontController.dataTaggingReq1(req, res)
    );
    this.router.post("/dataTaggingReq2/", (req: express.Request, res: express.Response) =>
      frontController.dataTaggingReq1(req, res)
    );
    this.router.post("/projectInit/", (req: express.Request, res: express.Response) =>
      frontController.dataTaggingReq1(req, res)
    );
    this.router.post("/projectCreation/", (req: express.Request, res: express.Response) =>
      frontController.dataTaggingReq1(req, res)
    );
  }
}

export const frontRoutes = new FrontRoutes().router;