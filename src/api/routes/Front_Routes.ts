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
    this.router.post("/taggingFileProcess/", (req: express.Request, res: express.Response) => 
      frontController.taggingFileProcess(req, res)    
    );
    this.router.post("/userValidation/", (req: express.Request, res: express.Response) =>
      frontController.userValidation(req, res)
    );
    this.router.post("/dataTaggingInit/", (req: express.Request, res: express.Response) =>
      frontController.dataTaggingInit(req, res)
    );
    this.router.post("/projectInit/", (req: express.Request, res: express.Response) =>
      frontController.projectInit(req, res)
    );
    this.router.post("/projectCreation/", (req: express.Request, res: express.Response) =>
      frontController.projectCreation(req, res)
    );
  }
}
export const frontRoutes = new FrontRoutes().router;