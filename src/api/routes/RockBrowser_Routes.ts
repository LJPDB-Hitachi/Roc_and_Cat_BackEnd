import * as express from "express";
import { rockBrowserController } from "../controllers/RockBrowser_Controller";

class RockBrowserRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }

  private config(): void {
    this.router.post("/searchAllMatches/", (req: express.Request, res: express.Response) =>
      rockBrowserController.searchAllMatches(req, res)
    );
  }
}
export const rockBrowserRoutes = new RockBrowserRoutes().router;