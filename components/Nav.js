import React from 'react'
import { Link } from '../routes'

function Nav() {
  return (
    <nav>
      <li>
        <Link route="home">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link route="about">
          <a>About</a>
        </Link>
      </li>

      <style jsx>{`
        nav {
          display: flex;
        }
        li {
          list-style: none;
          margin-right: 1rem;
        }
      `}</style>
    </nav>
  )
}

export default Nav
