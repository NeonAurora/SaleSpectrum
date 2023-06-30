import passport from "passport";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

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

export const googleCallback = (req, res) => {
  passport.authenticate("google", (err, email) => {
    if (err) {
      return res.redirect(`${process.env.CLIENT_URL}/login`);
    }
    return res.redirect(`${process.env.CLIENT_URL}/auth/google/success?email=${email}`);
  })(req, res);
};


export const logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};

export const googleLoginRedirect = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email);
      return res.status(404).json({ message: "User not found." });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    console.log("Login successful:", { result: user, token });
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
};
