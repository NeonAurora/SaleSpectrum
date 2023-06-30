import passport from "passport";

export const loginSuccess = (req, res) => {
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully logged in",
      user: req.user,
    });
  } else {
    res.status(403).json({ error: true, message: "Not authorized" });
  }
};

export const loginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};

export const googleLogin = passport.authenticate("google", [
  "profile",
  "email",
]);

export const googleCallback = passport.authenticate("google", {
  successRedirect: `${process.env.CLIENT_URL}/dashBoard`,
  failureRedirect: `${process.env.CLIENT_URL}/dashBoard`,
});


export const logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};
