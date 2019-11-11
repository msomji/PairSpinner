import React, { useEffect, useState } from 'react'
import TeamEntity from '../../models/teamEntity'
import { fetchAllTeams } from '../../Services/TeamsService/TeamsService'
import Button from '../Button/Button'
import './TeamsComponent.scss'

export default function TeamsComponent() {
  const [loaded, setLoaded] = useState(false)
  const [teams, setTeams] = useState([''])

  useEffect(() => {
    fetchAllTeams().then(data => {
      setTeams(data.map((team: TeamEntity) => team.teamName))
      setLoaded(true)
    })
  }, [])

  if (loaded) {
    return (
      <section className="main">
        <div className="cta">
          <div className="buttons-container">
            <Button text="New Team"></Button>
            <Button text="Existing Team"></Button>
          </div>
          <p className="has-text-dark is-size-3 is-italic">
            Leave The Pairings to Fate...
          </p>
        </div>
        {/* <ul>
          {teams.map((team, index) => (
            <li key={index}>
              <Link to={'/profile/' + team}>{team}</Link>
            </li>
          ))}
        </ul> */}
      </section>
      // <>
      // </>
    )
  } else {
    return (
      <>
        <div>loading teams....</div>
      </>
    )
  }
}
