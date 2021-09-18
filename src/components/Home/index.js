// Write your code here
import {Component} from 'react'

import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamsList = data.teams
    const formattedData = teamsList.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamsList: formattedData})
  }

  render() {
    const {teamsList} = this.state
    return (
      <div className="home-container">
        <div className="title-logo-container">
          <img
            className="ipl-logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div>
          <ul className="teams-list-container">
            {teamsList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Home
