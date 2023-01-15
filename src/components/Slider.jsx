import React from 'react'
import CardSlider from './CardSlider'

export const Slider = ({movies}) => {
    const getMoviesFromRange = (from, to) => {
        return movies.slice(from,to)
    }
  return (
    <div>
        <CardSlider title="Trending Now" data={getMoviesFromRange(0,9)}/>
        <CardSlider title="New Realise" data={getMoviesFromRange(10,19)}/>
        <CardSlider title="Trending Now" data={getMoviesFromRange(20,29)}/>
        <CardSlider title="Trending Now" data={getMoviesFromRange(30,39)}/>
        <CardSlider title="Trending Now" data={getMoviesFromRange(40,49)}/>
        <CardSlider title="Epics" data={getMoviesFromRange(50,60)}/>
    </div>
  )
}
