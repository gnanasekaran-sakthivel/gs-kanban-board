import { Router } from "express";
import { ticketRouter } from "./ticket-routes.js";
import { userRouter } from "./user-routes.js";

const router = Router();

/* /api/tickets */
router.use("/tickets", ticketRouter);
// /api/users
router.use("/users", userRouter);

export default router;
