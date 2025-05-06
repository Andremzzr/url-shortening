import { Router } from "express";
import { createURLController } from "../controllers/urlController";
const router =  Router()

router.post('/encode', createURLController)

module.exports = router;
