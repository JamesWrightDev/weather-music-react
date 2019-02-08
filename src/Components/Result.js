import React from 'react'
import { Container, Box, Columns, Column, Notification  } from 'bloomer';


export default function Result(props) {
  return (
    <div>
      <Columns isCentered>
        <Column isSize={6}>
          <h1>{props.name}</h1>
        </Column>
      </Columns>
      <Columns isCentered>
        <Column isSize={6}>
          <button>View Playlist</button>
        </Column>
      </Columns>
          
          
          <div className="results">
            <h3 className='results-weather'>{props.weather}</h3>
            <h3 className='results-temp'>{props.temp}</h3>
          </div>
    </div>
  )
}
