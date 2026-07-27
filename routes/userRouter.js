import express from "express";

const router = express.Router();



router.get("/:id", (req, res) => {
    res.json([req.params.id]);
});

router.delete("/", (req, res) => {});

router.post("/", (req, res) => {
    req.accepts("application/json");
    res.json(req.body.username);
});

export default router;