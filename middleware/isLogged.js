const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  try {
    const loginToken = req.signedCookies.loginToken;
    console.log('login token', loginToken);
    if (!loginToken) {
      throw 'Not logged in';
    }
    
    req.loginToken = jwt.verify(loginToken, process.env.TOKEN_SECRET);

    next();

  } catch (error) {
    console.log(error);
    return res.redirect('/account/login');
  }
};
