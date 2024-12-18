import express from "express";
import { getBook } from "../controller/book.control.js";

const router = express.Router({ mergeParams: true })

router.get("/",getBook);

export default router;


