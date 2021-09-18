// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <div className="team-container">
        <img className="teamLogo" src={teamImageUrl} alt={name} />
        <h1 className="team-name">{name}</h1>
      </div>
    </Link>
  )
}

export default TeamCard
