// Write your code here
import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesDetails: {}}

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const data = await response.json()

    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = data.latest_match_details
    const recentMatches = data.recent_matches

    const updatedLatestMatchDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const updatedRecentMatches = recentMatches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    const updatedTeamMatchesDetails = {
      teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
    }

    this.setState({teamMatchesDetails: updatedTeamMatchesDetails})
  }

  render() {
    const {teamMatchesDetails} = this.state
    const {
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = teamMatchesDetails

    console.log(recentMatches)
    console.log(latestMatchDetails)

    return (
      <div>
        <img src={teamBannerUrl} alt="team" />
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <div>
          <MatchCard recentMatchesDetails={recentMatches} />
        </div>
      </div>
    )
  }
}

export default TeamMatches
