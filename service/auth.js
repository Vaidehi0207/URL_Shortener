// const sessionIdToUserMap = new Map();
// yaha pe hum abhi tk states maintain kr rhe the in stateful authentication 
// but now in stateless we dont want states to be maintained

const jwt = require('jsonwebtoken')
const secret = 'Vaidehi$@';
// this function is used to set the user in the map
// function setUser(id, user){
//     sessionIdToUserMap.set(id, user);
// }

function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, 
    secret);
}

// this function is used to get the user from the map
function getUser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setUser, 
    getUser,
}