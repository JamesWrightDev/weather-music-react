import React from 'react'

export default function Result(props) {
  return (
    <div>
        <div className="wrapper">
          <h1>{props.name}</h1>
          <button>View Playlist</button>
          <h3>{props.weather}</h3>
          <h3>{props.temp}</h3>
        </div>
    </div>
  )
}
