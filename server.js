const express = require('express');
const app = express();
const PORT = 3000;
const jsxEngine = require('jsx-view-engine')
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/database')
const Flight = require('./models/flight')

//app config -- see templates
app.set('view engine', 'jsx');
app.engine('jsx',jsxEngine())

//* Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.get('/', (req, res) => {
    res.send('working!')
});


/**
 * Index
 */
app.get('/flights', async (req, res) => {
    try {
        const flight = await Flight.find({}).sort({departs: 'asc'});
        //flights: will be the props passed into the index view page
        res.render('Index', {
            flights: flight
        })
    } catch (e) {
        console.log(e);
    }
});

/**
 * New
 */
app.get('/flights/new', (req, res) => {
    const newFlight = new Flight();
	// Obtain the default date
	const dt = newFlight.departs;
	// Format the date for the value attribute of the input
	const departsDate = dt.toISOString().slice(0, 16);
	res.render('New', {departsDate});
    
})

/**
 * Post
 */
app.post('/flights', async(req, res)=> {

    // create a new fruit in db
    try {
        const createdFlight = await Flight.create(req.body);
        console.log(createdFlight);
        res.redirect('/flights');

    } catch (error) {
        console.log(error);
        // res.json({error});
    }
})

//connect to database from config file
connectDB()

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))