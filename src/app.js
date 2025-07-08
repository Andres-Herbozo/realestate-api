const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

const states = [
    {
        id:1 , 
        adress: 'California',
        capital: 'Sacramento',
        price: 100000,
        type: 'apartment',
    },
    {
        id:2 , 
        adress: 'Texas',
        capital: 'Austin',
        price: 150000,
        type: 'house',
    },
    {
        id:3 , 
        adress: 'New York',
        capital: 'Albany',
        price: 200000,
        type: 'apartment',
    }
];

app.get('/api/states', (req, res) => {
    res.json(states);
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
