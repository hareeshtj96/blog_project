const express = require('express');
const sequelize = require('./config/db');
const app = express();
const path = require('path');

// Middleware implementation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');


// Define the path for the views folder
app.set('views', path.join(__dirname, 'views'));

//Routes implementation
const authRoutes = require('./routes/authRoutes')
const postRoutes = require('./routes/postRoutes')

app.use('/auth', authRoutes)
app.use('/posts', postRoutes)

// Connecting database
sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(3000, () => console.log('Server is listening on port 3000'))
})