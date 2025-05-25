import express from 'express';


const app = express();

// Allow the server to understand JSON and form data from the frontend
app.use(express.static('frontend'));



app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');  
}); 
