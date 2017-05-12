import React, { Component } from 'react';
import Header               from './components/header/Header';
import CategorySelect       from './components/categorySelect/CategorySelect';
import CategoryDisplay      from './components/categoryDisplay/CategoryDisplay';
import AboutMovie           from './components/aboutMovie/AboutMovie.js';
import                           './App.css';
import                           './App-break550.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      favorites: [],
      showFavorites: false,
      category: [],
      categoryType: "",
      aboutMovie: "",
      defaultAboutMovie: "",
      activeButton: "",
      displayMovieInfo: false
    };
  };

  componentWillMount() {
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

  revealCards(){
    this.setState({showFavorites:false})
  }

  showFavs() {
    this.setState({
      showFavorites: !this.state.showFavorites
    })
  }

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
    this.setState({ activeButton: input })

    if (typeof input === 'string') {
      dataSource = `http://swapi.co/api/${input}/?format=json`;
      this.setState({displayMovieInfo:false})
    }

    if (typeof input === 'number') {
      dataSource = `http://swapi.co/api/films/${input}/?format=json`;
      this.setState({displayMovieInfo:true})

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
             <AboutMovie          movieSummary={ this.state.defaultAboutMovie }
                                selectCategory={ this.selectCategory.bind(this) } />
          </aside>
        </section>
        <section className="right-side-screen">
            <Header                  favorites={ this.state.favorites}
                                  movieSummary={ this.state.aboutMovie }
                              displayFavorites={this.showFavs.bind(this)}/>
          <div className="category-container">
            <CategorySelect
              displayFavorites = {this.revealCards.bind(this)}
              activeButton={ this.state.activeButton }
                                selectCategory={ this.selectCategory.bind(this) } />
          </div>
            <CategoryDisplay  showFavorites   ={ this.state.showFavorites}
                              displayMovieInfo={ this.state.displayMovieInfo }
                                     favorites={ this.state.favorites }
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
