const express = require('express');
const router = express.Router();
const connection = require('./database')

// Get all orders
router.get('/orders', (req, res) => {
    // Query the database to fetch all orders
    connection.query('SELECT * FROM orders', (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching orders' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Get one order
router.get('/orders/:id', (req, res) => {
    // Get the order id from the request params
    const id = req.params.id;
    // Query the database to fetch the order
    connection.query('SELECT * FROM orders WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error fetching order' });
        } else {
            res.status(200).json(results[0]);
        }
    });
});

// Create a new order
router.post('/orders', (req, res) => {
    // Get the order data from the request body
    const data = req.body;
    // Insert the data into the database
    connection.query('INSERT INTO orders SET ?', data, (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error creating order' });
        } else {
            res.status(201).json({ message: 'Order created successfully' });
        }
    });
});

// Update an order
router.put('/orders/:id', (req, res) => {
    // Get the order id and data from the request params and body
    const id = req.params.id;
    const data = req.body;
    // Update the data in the database
    connection.query('UPDATE orders SET ? WHERE id = ?', [data, id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error updating order' });
        } else {
            res.status(200).json({ message: 'Order updated successfully' });
        }
    });
});

// Delete an order
router.delete('/orders/:id', (req, res) => {
    // Get the order id from the request params
    const id = req.params.id;
    // Delete the order from the database
    connection.query('DELETE FROM orders WHERE id = ?', [id], (err, results) => {
        if (err) {
            res.status(500).json({ message: 'Error deleting order' });
        } else {
            res.status(200).json({ message: 'Order deleted successfully' });
        }
    });
});

module.exports = router;
