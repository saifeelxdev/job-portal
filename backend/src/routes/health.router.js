const express = require('express');
const pool = require('../config/db');
const router = express.Router();

router.get('/health', async (req, res) => {
    try {
        await pool.query('SELECT 1');
        res.json({
            status: 'OK',
            message: 'Database connection is healthy'
        });
    } catch (error) {
        res.status(503).json({
            status: 'ERROR',
            message: 'Database connection failed',
            error: error.message
        });
    }
});

module.exports = router;