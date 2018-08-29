import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Maxi Ferreira`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: rhythm(1),
          }}
        />
        <p>
          Hey, I'm <strong>Maxi</strong> 👋. I'm a Software Developer from
          Buenos Aires, Argentina.{' '}
          You can follow me on <a target="_blank" rel="nofollow" href="https://twitter.com/charca">Twitter</a>
          {' '}
          or see my work on <a target="_blank" rel="nofollow" href="https://github.com/charca">GitHub</a>.
        </p>
      </div>
    )
  }
}

export default Bio
