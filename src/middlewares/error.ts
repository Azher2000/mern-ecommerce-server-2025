import { NextFunction, Request, RequestHandler, Response } from "express";
import ErrorHandler from "../utils/utility-class.js";
import { ControllerType } from "../types/types.js";

export const errorMiddleware = (
  err:ErrorHandler, 
  req: Request, 
  res: Response, 
  next: NextFunction
) => {
  err.message ||= "Internal Server Error";
  err.statusCode ||= 500;

  if(err.name === "CastError") err.message = "Invalid ID";

   res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

// export const TryCatch = (func: ControllerType) => 
//   (req:Request, res:Response, next:NextFunction) => {
//     return Promise.resolve(func(req, res, next)).catch(next);
//   };

export const TryCatch = (
  func: ControllerType
): RequestHandler => {
  return async (req, res, next) => {
    try {
      await func(req, res, next); // Call the async controller function
    } catch (error) {
      next(error); // Pass errors to the Express error-handling middleware
    }
  };
};  