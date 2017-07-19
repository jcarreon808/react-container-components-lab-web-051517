// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews'
const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: '',
      reviews:[]
    }
  }

  handleChange = (e)=>{
    this.setState({
      searchTerm : e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    fetch(URL + '?query=' + this.stat.searchTerm)
    .then((resp)=>{resp.json()})
    .then((data)=>{this.setState({
      reviews: data.results
    })})
  }

  render(){
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
