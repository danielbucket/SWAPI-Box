import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import CategorySelect from './components/categorySelect/CategorySelect';
import CategoryDisplay from './components/categoryDisplay/CategoryDisplay';
import AboutMovie from './components/aboutMovie/AboutMovie.js';


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

  componentWillMount(){
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
    }).catch( e => {
      console.log(e);
    })
  }

  selectCategory(input){
    let dataSource;

    if (typeof input === 'string') {
      dataSource = `http://swapi.co/api/${input}/?format=json`;
    } else if (typeof input === 'number') {
      dataSource = `http://swapi.co/api/films/${input}/?format=json`;
    }

    fetch(dataSource)
    .then( resp => resp.json() )
    .then( data => {
      this.setState({ category: data.results,
                      categoryType: input,
                      aboutMovie: this.state.aboutMovie })
    }).catch( e => {
      console.log(e);
    })
  }

  render() {
    return (
      <div className="App">

        <section className="left-side-screen">
          <aside className="aside">
             <AboutMovie
               movieSummary={ this.state.aboutMovie }
               selectCategory={ this.selectCategory.bind(this) }
              />
          </aside>
        </section>

        <section className="right-side-screen">
            <Header
              favorites={ this.state.favorites }
            />
          <div className="category-container">
            <CategorySelect
              selectCategory={ this.selectCategory.bind(this) }
            />
          </div>
            <CategoryDisplay
              selectedFavorites={ this.state.favorites }
              presentCategory={ this.state.category }
              typeCategory={ this.state.categoryType }
            />
        </section>

      </div>
    );
  }
}


export default App;
