import { Request, Response, Express, Router } from "express";
import { models } from "../db";
import lodash from "lodash";

export default function exploreRoutes(router: Router) {
  router.get("/users", async (req: Request, res: Response) => {
    models.UserModel.find({})
      .then((users) => {
        const usersData = users.map((user) => {
          return lodash.pick(user, ["_id", "userName"]);
        });
        res.json(usersData);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return router;
}
