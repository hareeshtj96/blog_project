const express = require('express');
const router = express.Router();

// Example route for getting all posts
router.get('/', (req, res) => {
    res.send('List of all posts');
});

// Example route for creating a new post
router.post('/', (req, res) => {
    const newPost = req.body;
    // Logic to save the new post to the database
    res.send('New post created');
});

// Example route for getting a single post by ID
router.get('/:id', (req, res) => {
    const postId = req.params.id;
    // Logic to get a post by its ID from the database
    res.send(`Post details for post ID: ${postId}`);
});

// Example route for updating a post by ID
router.put('/:id', (req, res) => {
    const postId = req.params.id;
    const updatedPost = req.body;
    // Logic to update the post in the database
    res.send(`Post with ID: ${postId} updated`);
});

// Example route for deleting a post by ID
router.delete('/:id', (req, res) => {
    const postId = req.params.id;
    // Logic to delete the post from the database
    res.send(`Post with ID: ${postId} deleted`);
});

module.exports = router;  // Ensure the router is exported
