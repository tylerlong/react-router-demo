import React from 'react'
import { Route, Link } from 'react-router-dom'

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>Topics - {match.params.main}</h2>
    <ul>
      <li>
        <Link to={`${match.url}/topic/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/topic/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/topic/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )} />
  </div>
)

export default Topics
