import { Router } from "express";
import { clerkWebhookHandler } from "../controllers/webhook.controller.js";
import express from "express";

const router = Router();

router.post(
	"/clerk",
	express.raw({ type: "application/json" }),
	clerkWebhookHandler
);

export default router;