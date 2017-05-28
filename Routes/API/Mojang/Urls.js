/**
 * Created by Indexyz on 2017/4/11.
 */
"use strict";

const express = require("express");
const errors = require("./Errors");
let router = express.Router();

// Application Request Method Check
router.use((req, res, next) => {
    if (req.headers["content-type"].indexOf("application/json") === -1){
        res.status(415).send(errors.UnsupportedMediaType);
    } else {
        next();
    }
});

router.get("*", (req, res, next) => {
    res.status(405).send(errors.MethodNotAllowed);
});

router.post("/authenticate", require("./Authenticate").post);
router.post("/refresh", require("./Refresh").post);
router.post("/validate", require("./Validate").post);
router.post("/signout", require("./Signout").post);
router.post("/invalidate", require("./Invalidate").post);

module.exports = router;
