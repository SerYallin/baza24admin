import { NextFunction, Request, Response } from 'express';

export const authentificate = (
  _req: Request,
  _res: Response,
  next: NextFunction
) => {
  next();
};
