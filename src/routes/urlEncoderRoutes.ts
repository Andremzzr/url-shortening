import { Router } from "express";
import { createURLController, getURL } from "../controllers/urlController";
const router =  Router()

router.get("/:hash", getURL);
router.post('/encode', createURLController);

module.exports = router;
