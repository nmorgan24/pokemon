require('dotenv').config();
const express = require('express');
const pokemonRoutes = require('./controllers/pokemonRoutes');

const app = express();


app.use(pokemonRoutes);

app.use(express.json())



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});