const express = require("express");
const path = require("path");
const authRoutes = require("./routes/auth-routes");
const passportSetup =require ("./config/passport-setup");
const passport = require ("passport")
const cookiesession = require ("cookie-session");
const key =require ("./config/key")


const app = express();


app.set("view engine","ejs");

//=======- Middleware =======
app.use(cookiesession({
    maxAge:1000*60*60,
    keys:["key.cookie.secret"]
})
);

//initialize ==================
app.use(passport.initialize());

//authen
app.use("/auth", authRoutes);


app.use(passport.session());


//========  Services ==========



//--------- Root ---------
app.get("/",(req,res) => {
    // res.sendFile(path.join(__dirname, "views/home.html"));
    res.render("home.ejs")
});

const PORT = 3000;


app.listen(PORT, () => {
    console.log("Server is running at " + PORT)
});

