const router = require("express").Router();
const authCheck = (req, res) => {
    if (!req.user) {
        res.redirecet("/auth/login")
    }
    else {
        next();
    }
}


router.use(authCheck);

// show prfile page
router.get("/", (req, res) => {
    console.log(req.user)
    // res.render ("profile",{user:req.user});

});

module.exports = router;