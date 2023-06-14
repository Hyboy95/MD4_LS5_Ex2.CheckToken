import expess from "express";
import { GeneralController } from "../controllers/general.controller";
import { checkToken } from "../middlewares/checkToken";
export const router = expess.Router();

router.post('/', checkToken, GeneralController.getToken);