const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");



router.get("/", (req, res) => {
    const sqlText = `SELECT * FROM "feedback";`;
    pool.query(sqlText)
    .then((result) => {
        console.log("Got feedback from database", result)
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error geting feeback from database', error);
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    const feedback = req.body;

    const sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`;
    
    pool.query(sqlText, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
        console.log("posted feedback to database", result)
        res.sendStatus(201);
    })
    .catch((error) => {
        console.log('error posting feeback to database', error);
        res.sendStatus(500);
    });
});

module.exports = router;