const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('We are online')
})

app.listen(3001, () => {
    console.log('Server running on port 3001')
})