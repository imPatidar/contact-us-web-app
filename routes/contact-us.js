const express = require("express");
const authenticate = require("../middleware/authenticate");
let router = express.Router();
let {contactUs: ContactUs} = require('../sequelize').models

router.post("/postContactDetails", authenticate, async (req, res) => {

    let contactDetails = req.body;
    try {
        if (!contactDetails.name || !contactDetails.email || !contactDetails.message) {
            res.status(400).send("Please fill all the fields");
        } else {
            let data = await ContactUs.create(contactDetails);

            if (data) {
                res.status(200).json({
                    status: "success",
                    message: "Successfully posted contact details."
                });
            } else {
                res.status(400).json({
                    status: "error",
                    message: "Error in posting contact details."
                });
            }
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

});

router.get("/getContactDetails", authenticate, async (req, res) => {
    try {
        let data = await ContactUs.findAll();

        if (data) {
            res.status(200).json({
                status: "success",
                data: data
            });
        } else {
            res.status(400).json({
                status: "error",
                message: "Error in getting contact details."
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


module.exports = router;

