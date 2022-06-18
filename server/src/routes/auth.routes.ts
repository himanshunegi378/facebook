import { Router } from "express";
import { models } from "../db";

const router = Router();

export default function authRoutes(router: Router) {
  router.post("/signup", async (req, res) => {
    const { userName, password } = req.body;
    try {
      const newUser = await models.UserModel.create({
        userName,
        password,
      });
      res.json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  });

  router.post("/signin", async (req, res) => {
    const { userName, password } = req.body;
    try {
      const user = await models.UserModel.findOne({
        where: {
          userName,
          password,
        },
      });
      if (user) {
        res.json(user);
      } else {
        res.status(401).json({
          error: "Invalid Credentials",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Something went wrong",
      });
    }
  });
  return router;
}
