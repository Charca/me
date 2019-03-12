import React, { Component } from 'react'
import { Link } from 'gatsby'

import profilePic from '../profile-pic.png'
import coffeePic from '../../assets/coffee.png'
import { rhythm } from '../../utils/typography'

class Sidebar extends Component {
  render() {
    return (
      <div style={{
        borderRight: '1px solid #f2f2f2',
        float: 'left',
        width: '30%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}>
        <div style={{
          textAlign: 'center',
          padding: '240px 20px 0 20px',
        }}>
          <img
            src={coffeePic}
            alt={`Maxi Ferreira`}
            style={{
              marginBottom: 0,
              width: rhythm(5),
              height: rhythm(5),
              borderRadius: rhythm(5),
            }}
          />
          <h3 style={{
              fontFamily: 'Montserrat, sans-serif',
              marginTop: 10,
              marginBottom: rhythm(1),
            }}
          >
            <Link
              style={{
                boxShadow: 'none',
                textDecoration: 'none',
                color: 'inherit',
              }}
              to={'/'}
            >
              Maxi Ferreira
            </Link>
          </h3>
          <p>
            Hey, I'm <strong>Maxi</strong> 👋. I'm a Software Developer from
            Buenos Aires, Argentina.{' '}
            You can follow me on <a target="_blank" rel="nofollow" href="https://twitter.com/charca">Twitter</a>
            {' '}
            or see my work on <a target="_blank" rel="nofollow" href="https://github.com/charca">GitHub</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default Sidebar
