import React from 'react'
import propTypes from 'prop-types';
import './Movie.css';
import {Link} from 'react-router-dom'


function Movie({genre,id,poster,summary,title,year}) {
  return (
    <div className='movie'>
      <Link to='/detail' state={{genre,id,poster,summary,title,year}}>
      <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
            <h3 className='movie_title'>{title}</h3>
            <h4 className='movie_year'>{year}</h4>
            <ul className='movie_genres'>
            {genre.map((genre, index) => {
                return (
                <li className='moive_genre' key={index}>{genre}</li>
                )
            })}
            </ul>
            <p className='movie_summary'>{summary.slice(0,180)} ...</p>
        </div>
      </Link>
    </div>
  )
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genre: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie