// Server-side code using Node.js and Express

const express = require('express');
const app = express();
const port = 3000;

// Countdown start time (set this to when you want the countdown to start)
const countdownStartTime = new Date('2024-08-28T00:00:00Z').getTime();
const countdownDuration = 100000 * 1000; // 100,000 seconds in milliseconds

app.use(express.static('public'));

app.get('/current-time', (req, res) => {
    const currentTime = Date.now();
    const elapsed = currentTime - countdownStartTime;
    const remainingTime = Math.max(countdownDuration - elapsed, 0); // Ensure time is not negative

    res.json({ remainingTime: Math.floor(remainingTime / 1000) }); // Send remaining time in seconds
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
