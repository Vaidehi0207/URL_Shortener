const express = require('express');
const path = require('path');
const { connectToMongoDB } = require('./connect');
const { restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth');
const urlRoute = require('./routes/url');
const cookieParser = require('cookie-parser');

const URL = require('./models/url');
const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')

const app = express();
const PORT = 8002;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log('Connected to MongoDB'))

// set the view engine to ejs
// ejs files basically html files hoti h 
app.set("view engine", "ejs");
// aur express ko ye bhi bta diya ki humara view engine ejs h 
// hum in lines se ye bta rhe h ki jo bhi html files h wo views folder me h 
app.set('views', path.resolve('./views'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

// ye middleware tbhi chalega jb user logged in hoga 
app.use('/url', restrictToLoggedinUserOnly,urlRoute);
// agar koi bhi cheez '/' se use hoti h toh staticRoute ko render krna h
app.use('/',  checkAuth, staticRoute);

app.use('/user', userRoute);

// app.get('/test', async(req, res) => {
//     // this fetches all the documents from the URL collection in the database
//     const allURLs = await URL.find({});
//     // humne bta diya ki home wala view render krna h 

//     // use res.render to load up an ejs view file

//     return res.render('home', {
//         urls: allURLs,
//     });
// });

app.get('/url/:shortId', async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp : Date.now(),
                },
            },
        }
)
    res.redirect(entry.redirectURL);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

