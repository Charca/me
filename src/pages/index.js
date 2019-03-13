import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/layout'
import { rhythm } from '../utils/typography'
import profilePic from '../components/profile-pic.png'

class Landing extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <img
            src={profilePic}
            alt={`Maxi Ferreira`}
            style={{
              marginBottom: rhythm(1 / 2),
              width: rhythm(5),
              height: rhythm(5),
              borderRadius: rhythm(5),
            }}
          />
          <p style={{
            fontSize: 40,
          }}>
            Hey, I'm <strong>Maxi</strong> 👋
            <br />
            I'm a Software Engineer from
            Buenos Aires, Argentina.{' '}
          </p>
          <p>
            I'm currently working on a redesign of my personal website. In the meantime, you can follow me on
            {' '}
            <a target="_blank" rel="nofollow" href="https://twitter.com/charca">Twitter</a>
            {' '}
            or see some of my work on <a target="_blank" rel="nofollow" href="https://github.com/charca">GitHub</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default Landing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
