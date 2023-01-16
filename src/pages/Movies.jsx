import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, getGenres } from '../store';
import { Slider } from '../components/Slider';
import { firebaseAuth } from '../utils/firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const Movies = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovie({ type: "movies" }))
    }
    // eslint-disable-next-line
  }, [genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
  }

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      //navigate("/");
    }
  })

  return (
    <Container>
      <div className='navbar'>
        <Navbar isScrolled={isScrolled}/>
      </div>
      
      <div className='data'>
        <SelectGenre genres={genres} type={"movie"}/>
        {
          movies.length ? <Slider movies={movies}/>: <NotAvailable/>
        }
      </div>
    </Container>
  )
}


export default Movies;

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`
