const request = require('supertest');
const app = require('../src/app');

// Importar los estados desde app.js
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

describe('GET /api/states', () => {
    it('should return all states', async () => {
        const response = await request(app).get('/api/states');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(states);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0]).toHaveProperty('id');
    });
});