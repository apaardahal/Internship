
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(500, () => {
    console.log('Server running')
})


const greeting: string = 'Hello, world!';

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8]

