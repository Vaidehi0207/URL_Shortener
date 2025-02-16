const { getUser} = require('../service/auth')

async function restrictToLoggedinUserOnly(req, res, next){
    const userUid = req.cookies?.uid;
    
    // agar user ki uid nahi h toh usko login page pe redirect kr do
    if(!userUid)
        return res.redirect('/login');
    const user = getUser(userUid);

    // agar user nahi mila toh usko login page pe redirect kr do
    if(!user)
        return res.redirect('/login');

    // agar sab sahi se mil gya toh 
    // req me user ko daal denge aur next function ko call kr denge 
    req.user = user;
    next();
}

// ye function force ni kr rha h ki user logged in ho
// ye bas check kr rha h ki user logged in h ya nahi
async function checkAuth(req, res, next){
    const userUid = req.cookies?.uid;
    
    const user = getUser(userUid);

    req.user = user;
    next();
}

module.exports = {
    restrictToLoggedinUserOnly,
    checkAuth,
}