import React from 'react'
import { Link } from 'gatsby'

const isCurrent = (anchor, pathname) =>
  pathname.endsWith(anchor) ? 'current' : ''
class Navigation extends React.Component {
  state = {
    pathname: '#home'
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ pathname: window.location.href })
    })
  }
  render() {
    const { pathname = '' } = this.state
    return (
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' />
        <ul id='nav' className='nav'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className={isCurrent('#about', pathname)}>
            <a className='smoothscroll' href='#about'>
              About
            </a>
          </li>
          <li className={isCurrent('#resume', pathname)}>
            <a className='smoothscroll' href='#resume'>
              Resume
            </a>
          </li>
          <li className={isCurrent('#portfolio', pathname)}>
            <a className='smoothscroll' href='#portfolio'>
              Work
            </a>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className={isCurrent('#footer', pathname)}>
            <a className='smoothscroll' href='#footer'>
              Footer
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
