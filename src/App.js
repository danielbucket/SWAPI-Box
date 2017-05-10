import React, { Component } from 'react';
import Header               from './components/header/Header';
import CategorySelect       from './components/categorySelect/CategorySelect';
import CategoryDisplay      from './components/categoryDisplay/CategoryDisplay';
import AboutMovie           from './components/aboutMovie/AboutMovie.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      category: [],
      categoryType: "",
      aboutMovie: "",
      defaultAboutMovie: "",
      activeButton: ""
    };
  };

  componentWillMount(){
    let episode = Math.floor(Math.random() * (6))+1;

    fetch(`http://swapi.co/api/films/?/format=json`)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({
        defaultAboutMovie: data.results[episode]
      });
    }).catch( e => {
      console.log(e)
    })
  };

  selectFavorite(input) {
    let tempFav  = this.state.favorites;


    let position = tempFav.indexOf(input)
    position <= -1
      ? tempFav.push(input)
      : tempFav.splice(position, 1)
        this.setState({ favorites: tempFav })
  };

  selectCategory(input) {
    let dataSource;
    //is this the best time to setState()? I'm concerned about rerendering
    this.setState({ activeButton: input })

    if (typeof input === 'string') {
      dataSource = `http://swapi.co/api/${input}/?format=json`;
    }

    if (typeof input === 'number') {
      dataSource = `http://swapi.co/api/films/${input}/?format=json`;
    }

    fetch(dataSource)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({ category: data.results,
                  categoryType: input,
                    aboutMovie: this.state.defaultAboutMovie
                  });
    }).catch( e => {
      console.log(e)
    })

  }
  render() {
    return (
      <div className="App">
        <section className="left-side-screen">
          <aside className="aside">
             <AboutMovie  movieSummary={ this.state.defaultAboutMovie }
                          selectCategory={ this.selectCategory.bind(this) } />
          </aside>
        </section>
        <section className="right-side-screen">
            <Header favorites={ this.state.favorites}
                    movieSummary={ this.state.aboutMovie } />
          <div className="category-container">
            <CategorySelect activeButton={ this.state.activeButton }
                            selectCategory={ this.selectCategory.bind(this) } />
          </div>
            <CategoryDisplay  favorites={ this.state.favorites }
                              selectedFavorites={ this.selectFavorite.bind(this) }
                              presentCategory={ this.state.category }
                              typeCategory={ this.state.categoryType }
                              movieSummary={ this.state.aboutMovie } />
        </section>
      </div>
    );
  };
};


export default App;
