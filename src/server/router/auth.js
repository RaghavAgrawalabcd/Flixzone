const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../model/userSchema");

router.post("/signin", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Invalid Credentials" });
    }
    const userLogin = await User.findOne({ email: email });
    if (!userLogin) {
      res.status(400).json({ error: "user error" });
    } else {
      const isMatch = await bcrypt.compare(password, userLogin.password)
      if (isMatch) {
      token = jwt.sign({ _id: userLogin._id }, process.env.SECRET_KEY);
      userLogin.token = token;
      res.cookie("token", token, {
        expires: new Date(Date.now() + 25892000),
        httpOnly: true
      });
        res.end(`${userLogin.email}`);
      }
      else {
        res.status(400).json({ error: "Invalid Credentials" });
      }
    }
    
  } catch (err) {}
});

router.post("/signup", async (req, res) => {
  let { email, password, cpassword } = req.body;
  if (!email || !password || !cpassword) {
    res.status(422).json({ error: "Plz fill all details" });
  }
  try {
    if (password != cpassword) {
      return res.status(422).json({ error: "Password are not matching" });
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ User: "User Already Exist" });
    } else {
      password = await bcrypt.hash(password, 12);
      cpassword = await bcrypt.hash(cpassword, 12);
      const user = new User({ email, password, cpassword });
      const userRegister = await user.save();
      if (userRegister) {
        return res
          .status(201)
          .json({ message: "user registered successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

/*router.post('/register', (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        res.status(422).json({"error":"Plz fill all details"})
    }
     
    User.findOne({ email: email }).then((userExist) => {
        if (userExist) {
            return res.status(422).json({"User":"User Already Exist"})
        }
        const user = new User({ name, email, phone, work, password, cpassword })
        user.save().then(() => {
            res.status(201).json({message:"user registered successfully"})
        }).catch((error)=>{res.status(200).json({error:"Failed to register"}) })
    }).catch((err)=> console.log(err))
})*/
