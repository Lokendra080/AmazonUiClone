const express = require('express')
const router = new express.Router()
const Products = require('../Models/ProductsSchema')
const USER = require('../Models/userSchema')
const bcrypt = require('bcryptjs')
const athenticate =require("../Middleware/Authenticate")
const cookieparser = require("cookie-parser")

//GetAllData Api
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log(productsdata)
        res.status(201).json(productsdata);
    } catch (error) {
        console.log("error" + error.message)
    }
})


//GetPerticularData Api
router.get("/getproducts/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id);

        const individualData = await Products.findOne({ id: id });
        // console.log(individualData);
        res.status(201).json(individualData);
    } catch (error) {

        res.status(400).json(error);
        // console.log("error" + error.message);
    }
})


//GetNewUserData Api
router.post("/register", async (req, res) => {
    // console.log(req.body);
    const { fname, email, number, password, cpassword } = req.body
    if (!fname || !email || !number || !password || !cpassword) {
        res.status(422).json({ error: "Fill the all data" })
        // console.log("no data available")
    }
    try {
        const preuser = await USER.findOne({ email: email })
        if (preuser) {
            res.status(422).json({ error: "This Email is already register" })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "Password & Cpassword  not match" })

        } else {
            const newUser = new USER({
                fname, email, number, password, cpassword
            });

            //password hasing progress...

            const storeData = await newUser.save();
            // console.log(storeData);
            res.status(201).json(storeData)
        }
    } catch (error) {

    }
})
//userLogin Api
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ error: "Fill the all data" })
    }

    try {
        const userlog = await USER.findOne({ email: email })
        // console.log(userlog);
        if (userlog) {
            const isMatch = await bcrypt.compare(password, userlog.password);
            // console.log(isMacth)

            //token genrate

            const token = await userlog.generateAuthtoken();
            // console.log(token);

            res.cookie("localhost", token, {
                expires: new Date(Date.now() + 90000),
                httpOnly:true
            })


            if (!isMatch) {

                res.status(400).json({ error: " Invalid details 1" })
            } else {

                res.status(201).json(userlog)
            }
        } else {

            res.status(400).json({ error: "Invalid details 2" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid details 3" })

    }
})

//Adding the data in logIn users cart Api

router.post("/addcart/:id", athenticate, async (req, res) => {

    try {
        // console.log("perfect 6");
        const { id } = req.params;
        const cart = await Products.findOne({ _id: id });
        console.log(cart);

        const Usercontact = await USER.findOne({ _id: req.userID });
        console.log(Usercontact + "user milta hain");


        if (Usercontact) {
            const cartData = await Usercontact.addcartdata(cart);

            await Usercontact.save();
            console.log(cartData + " thse save wait kr");
            console.log(Usercontact + "userjode save");
            res.status(201).json(Usercontact);
            }else{
            res.status(400).json({ error: "Invalid details 4" }
            );
               }
    } catch (error) {
        res.status(401).json({ error: "Invalid details 5" })
    }
});

// router.get("/cartdetails", authenicate, async (req, res) => {
//     try {
//         const buyuser = await User.findOne({ _id: req.userID });
//         console.log(buyuser + "user hain buy pr");
//         res.status(201).json(buyuser);
//     } catch (error) {
//         console.log(error + "error for buy now");
//     }
// });


module.exports = router;