const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 9876;

const apiUrls = {
    'p': 'http://20.244.56.144/test/primes',
    'f': 'http://20.244.56.144/test/fibo',
    'e': 'http://20.244.56.144/test/even',
    'r': 'http://20.244.56.144/test/rand'
};

let windowSize = 10;
let numberWindow = [];

const fetchNumbers = async (type, token) => {
    try {
        const response = await axios.get(apiUrls[type], {
            timeout: 500,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data.numbers || [];
    } catch (error) {
        console.error('Error fetching numbers:', error.response?.status, error.response?.data);
        return [];
    }
};

app.get('/numbers/:numberid', async (req, res) => {
    const { numberid } = req.params;
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) {
        return res.status(401).json({ error: "Unauthorized. Provide a Bearer token in Authorization header." });
    }

    if (!apiUrls[numberid]) {
        return res.status(400).json({ error: "Invalid number ID. Use 'p', 'f', 'e', or 'r'." });
    }

    const numbers = await fetchNumbers(numberid, token);
    const prevState = [...numberWindow];
    const newNumbers = numbers.filter(num => !numberWindow.includes(num));
    numberWindow.push(...newNumbers);
    if (numberWindow.length > windowSize) {
        numberWindow = numberWindow.slice(numberWindow.length - windowSize);
    }

    const avg = numberWindow.length > 0
        ? (numberWindow.reduce((sum, num) => sum + num, 0) / numberWindow.length).toFixed(2)
        : 0;

    res.json({
        windowPrevState: prevState,
        windowCurrState: numberWindow,
        numbers: numbers,
        avg: avg
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
