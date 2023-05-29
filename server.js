require('dotenv').config()
const express = require('express'); // importing Express
const app = express(); // instance of express
const port = process.env.PORT || 3000; // Defining port by environmental parameter or 3000
const router = require('./routes/routes')
app.use('/',router)
// App is listening to user-defined port or 300 and printing the information to the console.
app.listen(port, function (req, res) {
console.log(`Server is listening on port ${port}!`)
})