import { NextFunction, Request, Response } from "express";
import userModal from "../model/UserModel";

interface userFormDetails {
  firstName: string;
  email: string;
  number: string;
  connectionMethod: string;
  message: string;
}

export const submitForm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userDetails = req.body;
    console.log(req.body);
    if (userDetails) {
      if (userDetails.firstName && userDetails.number && userDetails.email) {
        const saveData = new userModal(req.body);
        await saveData.save();
        res.status(200).json({
          userDetails: req.body,
          msg: "Thank you",
        });
      } else res.status(500).send("Please do enter the required field");
    }
  } catch (error) {
    console.log(error);
  }
};
