import { Router } from "express";
import db from "../db";
import { generateJWT } from "../utils";
import express from "express"

const authRouter: Router = Router();

authRouter.use(express.json())

authRouter.post("/register", async (req, res) => {
    const body = req.body
    console.log(body)
    try {
        await db.user.createUser(body)
        return res.status(200).send({ msg: "Registered Success" })
    } catch (err) {
        return res.status(401).send(err)
    }
})

authRouter.post("/login", async (req, res) => {
    const body = req.body
    try {
        const user = await db.user.getUser(body.email)
        if (user.password === body.password) {
            const jwt = await generateJWT(user.id)
            return res.status(200).send({ jwt: jwt, userId: user.id })
        } else {
            return res.status(401).send("Wrong Password")
        }
    } catch (err) {
        return res.status(401).send("User Not Found")
    }
})

export default authRouter