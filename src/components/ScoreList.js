import React from 'react';
import axios from 'axios';

export default class ScoreList extends React.Component {
  state = {
    scores: []
  }

  componentDidMount() {
    const interval = setInterval(() => {
    axios.get(`https://statsapi.mlb.com/api/v1/schedule/games/?sportId=1`)
      .then(res => {
        const scores = res.data.dates[0].games;
        
        this.setState({ scores });
      })
    }, 5000);
  }


  render() {
    return (
      <ul>
        {
          this.state.scores
            .map(score =>
              
              <li key={score.gamePk} className="awayTeam"><img src={"https://www.mlbstatic.com/team-logos/team-cap-on-light/"+score.teams.away.team.id+".svg"} alt='' width="50px" height="50px"/>  {score.teams.away.score}     <img src={"https://www.mlbstatic.com/team-logos/team-cap-on-light/"+score.teams.home.team.id+".svg"} alt='' className="awayTeam" width="50px" height="50px"/> {score.teams.home.score} {score.status.detailedState}</li>
            )
        }
      </ul>
    )
  }
}