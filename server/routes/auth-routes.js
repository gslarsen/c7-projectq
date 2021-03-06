const router = require("express").Router();
const passport = require("passport");
const { UserAuthCheck } = require("./user-check");
const keys = require("../config/keys");

router.get("/current_user", UserAuthCheck, (req, res) => {
  res.send(req.user);
});

router.get("/current_user", (req, res) => {
  res.send(req.user);
});

// when login is successful, retrieve user info
router.get("/login/success", UserAuthCheck, (req, res) => {
  console.log("login/success accessed");
  console.log(req.user);
  if (req.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: req.user,
      cookies: req.cookies
    });
  }
});

// when login failed, send failed msg
router.get("/login/failed", (req, res) => {
  console.log("login/failed accessed");
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
});

// When logout, redirect to client
router.get("/logout", (req, res) => {
  console.log("logout");
  req.logout();
  res.redirect(keys.HOME_PAGE_URL);
});

// auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// redirect to home page after successfully login via google
router.get(
  "/google/callback",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    successRedirect: keys.HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
  })
);

module.exports = router;
