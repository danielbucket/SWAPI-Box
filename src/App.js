import React, { Component } from 'react';
import './App.css';

import Favorites        from './components/favorites/Favorites';
import CategorySelect   from './components/categorySelect/CategorySelect';
// import CategoryDisplay  from './components/CategoryDisplay/CategoryDisplay';
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

selectCategory(input){

  fetch(`http://swapi.co/api/${input}/?format=json`)
  .then( (resp) => resp.json() )
  .then( (data) => {
    this.setState({ category: data.results,
                    categoryType: input,
                    aboutMovie: })
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
          <Favorites favorites={this.state.favorites}/>
        </header>

        <section className="category-container">
          <CategorySelect selectCategory={this.selectCategory.bind(this)}/>
        </section>

        <section className="category-display">
          <p> Select A Category </p>
          {/* <CategoryDisplay */}
             {/* presentCategory={this.state.category} */}
             {/* typeCategory={this.state.categoryType} */}
             {/* selectedFavorites={this.state.favorites} */}
           {/* /> */}
        </section>

        <aside className="about-the-movie-aside">
          <AboutMovie movieSummary={this.state.aboutMovie} />
        </aside>
      </div>



    );
  }
}

export default App;
