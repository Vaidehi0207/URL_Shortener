const sessionIdToUserMap = new Map();

// this function is used to set the user in the map
function setUser(id, user){
    sessionIdToUserMap.set(id, user);
}

// this function is used to get the user from the map
function getUser(id){
    return sessionIdToUserMap.get(id);
}

module.exports = {
    setUser, 
    getUser,
}