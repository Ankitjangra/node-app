const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Task 1: Basic Node.js Server
app.get('/', (req, res) => {
  res.send('Hello, World!\n');
});

// Task 2: Data Manipulation
function calculateSum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

app.get('/calculate-sum', (req, res) => {
//   const inputNumbers = req.body.numbers;
const inputNumbers = [1,2,3,4,5];
  const sum = calculateSum(inputNumbers);
  console.log("@sum@",sum);
  res.json({ sum });
});

// Task 3: Asynchronous File Handling
app.get('/calculate-word-count', (req, res) => {
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading the file:', err);
          return res.status(500).json({ error: 'Error reading the file' });
        }
    
        const words = data.split(/\s+/).filter(word => word.trim() !== '');
        const wordCount = words.length;
        console.log("@@wordCount@@",wordCount);
        res.json({ wordCount });
    });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
