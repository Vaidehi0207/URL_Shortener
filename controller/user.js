const User = require('../models/user');
const {v4: uuidv4} = require('uuid');
const { setUser} = require('../service/auth');

async function handleUserSignup(req, res) {
    // body me se hum name, email aur password le lenge 
    const { name, email, password } = req.body;
    // ek user create kr rhe h 
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect('/');
}

async function handleUserLogin(req, res) {
    // body me se hum email aur password le lenge 
    const { email, password } = req.body;
    // ek user create kr rhe h 
    const user = await User.findOne({email, password})
    if(!user)
        return res.render('login', {
            error: "Invalid Username or Password",
        });

        // agar user mil gya toh uska session start kr denge
        // const sessionId = uuidv4();

        const token = setUser(user);
        // //res.cookie('uid', token);
        // else usko redirect kr denge home page pe 

        res.json({ token })
        return res.redirect('/');
}


module.exports = {
    handleUserSignup,
    handleUserLogin,
}