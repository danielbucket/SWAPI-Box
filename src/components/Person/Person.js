import React, {Component} from 'react'

class Person extends Component{
  constructor(){
    super()
    this.state ={
      homeworld : "",
      species   : "",
      population: ""
    }
  }

componentDidMount(){
  fetch(`${this.props.data.homeworld}`)
  .then( (resp) => resp.json() )
  .then( (info) => {

    this.setState({
      homeworld  : info.name,
      population : info.population
    })

  }).catch( (e) => {
    console.log(e);
  })


fetch(`${this.props.data.species[0]}`)
.then( (resp) => resp.json() )
.then( (info) => {
  this.setState({
    species : info.name
  })

}).catch( (e) => {
  console.log(e);
})
}

render(){
  return (
    <article className = "card">
      <div className = "card-title">
        {this.props.data.name}
      <div className = "favorites-btn"></div>
      </div>
      <div className = "card-info-container">
      <div className = "card-info">Homeworld:
      {this.state.homeworld}
      </div>
      <div className = "card-info">Species:
      {this.state.species}
      </div>
      <div className = "card-info">
      Population: {this.state.population}
      </div>
    </div>

    </article>

    )
  }
}

export default Person
