import { Router } from "express";
const router =  Router();


router.get('/',(req, res) => {
res.send("album routes with GET method");
});


export default router;