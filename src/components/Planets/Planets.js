import React,{Component} from 'react'


class Planets extends Component {
  constructor(){
    super()
    this.state = {
      residents:[]
    }
  }

  componentDidMount(){
    let residentList = []

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


    this.props.data.residents.forEach(person => {
    fetch(`${person}`)
    .then( (resp) => resp.json() )
    .then( (info) => {
       residentList.push(info.name)
       this.setState({residents:residentList})
    }).catch( (e) => {
      console.log(e);
    })
  })
  console.log(residentList.length)
    this.setState({
      residents:residentList
    })
}

  render(){
  return(
    <article className = "card">
      <div className = "card-title">
        {this.props.data.name} <div className = "favorites-btn"></div>
      </div>
      <div className = "card-info-container">
        <div className = "card-info">Terrain: {this.props.data.terrain}</div>
        <div className = "card-info">Population: {this.props.data.population}</div>
        <div className = "card-info">Climate: {this.props.data.climate}</div>
        <div className = "card-info">Residents:
        {
        this.state.residents.map(i => <p>{i}</p>)
        }
        </div>
      </div>
    </article>

    )
  }
}
export default Planets
