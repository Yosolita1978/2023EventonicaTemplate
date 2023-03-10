//This is the minimal express server. 
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = 8080;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/events', (req, res) =>{
    const events = [

        {id: 1, title: 'Women in Tech Techtonica Panel', location: 'Overland Park Convention Center'},
        {id: 2, title: 'Japanese Cultural Education', location: 'Seattle Convention Center'},
        {id: 3, title: 'Mary', location: 'Hilton Hotel Kansas City'},
        {id: 4, title: 'Cristina', location: 'SF Hilton Hotel'},
        {id: 5, title: 'Jair', location: 'West Ridge Mall '},
      ];
    res.json(events);
})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));