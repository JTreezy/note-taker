//How to Import Dependencies
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

//Set up express variables
const app = express()
// PORT NEEDS TO BE IN ALL CAPS
const PORT = process.env.PORT || 3000;

//Gives permission to work in public folder files
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, function () {
    console.log("Server is listening on https://localhost/" + PORT);
})
