import React, { Component } from 'react';
import './App.css';

import Favorites from './components/favorites/Favorites';
import CategorySelect from './components/categorySelect/CategorySelect';
import CategoryDisplay from './components/categoryDisplay/CategoryDisplay'


class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites   : [],
      category    : [],
      categoryType: "",
      sideStory   : "",

    }
  }

selectCategory(input){

  fetch(`http://swapi.co/api/${input}/?format=json`)
  .then( (resp) => resp.json() )
  .then( (data) => {
    this.setState({ category: data.results,
                    categoryType: input })
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
          <CategoryDisplay
             presentCategory={this.state.category}
             typeCategory={this.state.categoryType}
             selectedFavorites={this.state.favorites}
           />
        </section>

        <aside className="about-the-movie-aside">
          <pre className="aside-the-movie">
            It is a period of civil wars in the galaxy.  A brave alliance of underground freedom fighters has challenged the tyranny and oppression of the awesome GALACTIC EMPIRE.
            Striking from a fortress hidden among the billion stars of the galaxy, rebel spaceships have won their first victory in a battle with the powerful Imperial Starfleet.  The EMPIRE fears that another defeat could bring a thousand more solar systems into the rebellion, and Imperial control over the galaxy would be lost forever.
            To crush the rebellion once and for all, the EMPIRE is constructing a sinister new battle station.  Powerful enough to destroy an entire planet, its completion spells certain doom for the champions of freedom.
          </pre>
        </aside>
      </div>



    );
  }
}

export default App;
