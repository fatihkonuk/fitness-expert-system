import { Router } from "express";
import { RecommendController } from "../controllers";

const router = Router();

router.post("/", RecommendController.getRecommend);
router.post("/create", RecommendController.createRecommend);
router.post("/initialize", RecommendController.initializeReccommend);

export default router;