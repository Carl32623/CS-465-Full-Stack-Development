const jwt = require('jsonwebtoken');    // Enable JSON Web Tokens
const express = require('express');
const router = express.Router();


// This is where we will import the controllers we will route
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");

// Method to authenticate our JWT
function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];

    if(authHeader == null) {
        return res.sendStatus(401);
    }

    let headers = authHeader.split(' ');
    if(headers.length < 2) {
        return res.sendStatus(401);
    }

    const token = headers[1];
    if(token == null) {
        return res.sendStatus(401);
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.auth = verified;    // Set the auth param to the decoded object
        next();     // We need to continue or this will hang forever
    } catch (err) {
        return res.status(401).json('Token Validation Error');
    }
}

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);  // define route for login endpoint

// Define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList)  // GET Method routes tripList
    .post(authenticateJWT, tripsController.tripsAddTrip);  // POST Method Adds a Trip

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripsUpdateTrip - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip);


module.exports = router;
