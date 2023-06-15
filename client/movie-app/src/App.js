import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import { Card, CardContent, Grid, Paper } from '@mui/material'
// import axios from 'axios'

const App = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchMovies()
  }, [])
  const fetchMovies = async () => {
    try {
      const url = "http://localhost:8000/v1/movies"
      const res = await fetch(url);
      const data = await res.json()
      console.log('res', data)
      setMovies(data)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='container'>
      <h4>Movie App</h4>
      <Paper>
        <Grid container spacing={3}>
          {movies.map((movie, ind) => (
            <Grid item xs={3} key={ind}>
              <Card>
                <CardContent>
                  <h6>Movie: {movie.name}</h6>
                  <h6>Rating: {movie.rating}</h6>
                  <h6>ReleaseDate: {movie.releaseDate}</h6>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}

export default App;
