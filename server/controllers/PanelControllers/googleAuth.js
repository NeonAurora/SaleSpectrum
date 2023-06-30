import passport from "passport";
import User from "../../models/User.js";
import axios from "axios";
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

export const googleCallback = async (req, res) => {
  const { code } = req.query;

  // Use your Google client id and secret to exchange code for access_token
  const { data } = await axios.post('https://oauth2.googleapis.com/token', {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.SERVER_URL}/auth/google/callback`
  });

  const access_token = data.access_token;

  // Fetch user's information using access_token
  const { data: userData } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  const { email } = userData;

  // Try to find the user in your database
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

  // Here, we send a message to the origin of the popup (i.e., your app)
  res.send(`
    <script>
      window.opener.postMessage('${token}', '${process.env.CLIENT_URL}');
      window.close();
    </script>
  `);
};



export const logout = (req, res) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL);
};

// An express route handler that exchanges the one-time authorization code for user profile information
export const googleLogine = async (req, res) => {
  const { code } = req.body;

  // Exchange the one-time authorization code for an access token
  const { data } = await axios.post('https://oauth2.googleapis.com/token', {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code,
    grant_type: 'authorization_code',
    redirect_uri: `${process.env.CLIENT_URL}` // Notice this changed from SERVER_URL to CLIENT_URL
  });

  const access_token = data.access_token;

  // Fetch user's information using access_token
  const { data: userData } = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });

  const { email } = userData;

  // Try to find the user in your database
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

  // Return the token to the front end
  res.redirect(`${process.env.CLIENT_URL}/dashboard?token=${token}`);
};

