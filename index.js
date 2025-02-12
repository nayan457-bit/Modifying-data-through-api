const express = require('express');
const { connectDB } = require('./db');
const menuRoutes = require('./routes/menuRoutes');


const app = express();
app.use(express.json());

require('dotenv').config();
const port = process.env.port || 5000;
const db_url = process.env.db_url;

app.listen(port, async () => {
    try {
        await connectDB(db_url);
        console.log(`Server running on port ${port}`);
    } 
    catch (error) { 
        console.error(error);
    }
}); 

app.use('/api', menuRoutes);

app.get('/', (req, res) => {
    res.send('Hello World');
});