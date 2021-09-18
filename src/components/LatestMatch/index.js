// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <p>{umpires}</p>
      <p>{result}</p>
      <p>{manOfTheMatch}</p>
      <p>{date}</p>
      <p>{venue}</p>
      <p>{competingTeam}</p>
      <img src={competingTeamLogo} alt={venue} />
      <p>{firstInnings}</p>
      <p>{secondInnings}</p>
      <p>{matchStatus}</p>
    </div>
  )
}

export default LatestMatch
