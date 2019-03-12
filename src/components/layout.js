import React from 'react'
import { Link } from 'gatsby'
import Sidebar from './Sidebar'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
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
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
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
      )
    }
    return (
      <div
        style={{
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // maxWidth: rhythm(24),
          // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Sidebar />
        <div style={{
          float: 'right',
          width: '70%',
          padding: '30px',
        }}>
          {/* {header} */}
          {children}
        </div>
      </div>
    )
  }
}

export default Template
