// const adminAuth = (req, res, next) => {
//   console.log("Admin auth is checked");
//   const token = "xyz";
//   const isAdminAuthorized = token == "xyz";

//   if (!isAdminAuthorized) {
//     res.status(401).send("Unauthorised Admin");
//   } else {
//     next();
//   }
// };

// const userAuth = (req, res, next) => {
//   console.log("User auth is checked");
//   const token = "xyz";
//   const isUserAuthorized = token == "xyz";

//   if (!isUserAuthorized) {
//     res.status(401).send("Unauthorised User");
//   } else {
//     next();
//   }
// };

// module.exports = { adminAuth, userAuth };

const adminAuth = (req, res, next) => {
  console.log("Admin auth is checked");
  const token = "xyzabc";
  const isadminAuthenticated = token == "xyzabc";
  if (!isadminAuthenticated) {
    res.status(401).send("Unauthrised admin");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  console.log("User auth is checked");
  const token = "abc";
  isuserAuthenticated = token == "abc";
  if (!isuserAuthenticated) {
    res.status(401).send("user not authenticated");
  } else {
    next();
  }
};

module.exports = {adminAuth,userAuth}