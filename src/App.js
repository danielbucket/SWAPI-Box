import React, { Component } from 'react';
import './App.css';

import Favorites        from './components/favorites/Favorites';
import CategorySelect   from './components/categorySelect/CategorySelect';
import CategoryDisplay  from './components/categoryDisplay/CategoryDisplay';
import AboutMovie       from './components/aboutMovie/AboutMovie.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      category: [],
      categoryType: "",
      aboutMovie: ""
    }
  }

  componentDidMount(){
    let episode = Math.floor(Math.random() * (6))+1;

    fetch(`http://swapi.co/api/films/?/format=json`)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({
        aboutMovie: [
          data.results[episode].title,
          data.results[episode].episode_id,
          data.results[episode].opening_crawl
        ]
      })
    }).catch( (e) => {
      console.log(e);
    })
  }

  selectCategory(input){

    fetch(`http://swapi.co/api/${input}/?format=json`)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({ category: data.results,
                      categoryType: input,
                      aboutMovie: this.state.aboutMovie })
    }).catch( (e) => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="App">

        <header className="header">
          <h3>
            Swapi-Box
          </h3>
          <Favorites favorites={ this.state.favorites } />
        </header>

        <section className="category-container">
          <CategorySelect selectCategory={ this.selectCategory.bind(this) } />
        </section>

        <section className="category-display">
          <p> Select A Category </p>
          <CategoryDisplay
             presentCategory={ this.state.category }
             typeCategory={ this.state.categoryType }
             selectedFavorites={ this.state.favorites } />
        </section>

        <aside className="about-the-movie-aside">
          <AboutMovie movieSummary={ this.state.aboutMovie } />
        </aside>
      </div>
    );
  }
}

export default App;
