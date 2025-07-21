const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

app.post('/chat', (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    
    let responseMessage;
    let images = [];

    if (userMessage.includes('museum')) {
        responseMessage = 'Here are some museums you might like:';
        images = ['https://example.com/museum1.jpg', 'https://example.com/museum2.jpg'];
    } else if (userMessage.includes('hotel')) {
        responseMessage = 'Here are some recommended hotels:';
        images = ['https://example.com/hotel1.jpg', 'https://example.com/hotel2.jpg'];
    } else if (userMessage.includes('waterfall')) {
        responseMessage = 'Check out these beautiful waterfalls:';
        images = ['https://example.com/waterfall1.jpg', 'https://example.com/waterfall2.jpg'];
    } else if (userMessage.includes('viewpoint')) {
        responseMessage = 'Amazing viewpoints you can visit:';
        images = ['https://example.com/viewpoint1.jpg', 'https://example.com/viewpoint2.jpg'];
    } else if (userMessage.includes('hill station')) {
        responseMessage = 'Explore these hill stations:';
        images = ['https://example.com/hillstation1.jpg', 'https://example.com/hillstation2.jpg'];
    } else if (userMessage.includes('snacks')) {
        responseMessage = 'Enjoy these snack options:';
        images = ['https://example.com/snack1.jpg', 'https://example.com/snack2.jpg'];
    } else {
        responseMessage = 'I didn\'t understand that. Please specify if you want to book tickets for museums, hotels, waterfalls, viewpoints, hill stations, or snacks.';
    }

    res.json({ reply: responseMessage, images: images });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Chatbot server running at http://localhost:${port}`);
});


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Handle ticket booking
app.post('/api/book-ticket', (req, res) => {
    const { museum, date, number } = req.body;

    // Here you would handle the booking logic (e.g., save to a database)
    // For example purposes, we'll just return a mock response
    const bookingConfirmation = {
        museum,
        date,
        number,
        confirmationId: '123456' // Mock confirmation ID
    };

    res.json(bookingConfirmation);
});


