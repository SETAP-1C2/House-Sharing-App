import express from 'express';

const app = express();

app.use(express.static('frontend'));

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');  
}); 