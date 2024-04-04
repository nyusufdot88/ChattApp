import express from "express";
import chattAppController from "../controller/chattAppController.js";
const router = express.Router();

/**Routes */
router
.get("/api/broadcast", chattAppController.getAllBroadcastMsg)
.post("/api/broadcast", chattAppController.createBroadcastMsg )
.get("/api/channel/", chattAppController.getChannelList)
.get("/api/channel/:id", chattAppController.getChannelById )
.put("/api/channel/:name", chattAppController.CreateNewChannel )
.post("/api/channel/:id", chattAppController.CreateMsgByChannelId ) 
.delete("/api/channel/:id", chattAppController.deleteChannelById)

export default router;