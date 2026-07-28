import express from "express";
import * as userStore from "./stores/userStore.js"
const router = express.Router();



router.get("/:id", (req, res) => {
    const id = req.params?.id;
    var found = userStore.getUserById(id);
   res.json(found); 
});

router.get("/", (req, res) => {
    res.json({
        users: [...userStore.getAllUsers()]
    });
});

router.delete("/", (req, res) => {});

router.post("/", (req, res) => {
    const { username, email } = req.body;
    const id = userStore.addUser({
        username: username,
        email: email
    });

    res.json({"id": id});
});

export default router;