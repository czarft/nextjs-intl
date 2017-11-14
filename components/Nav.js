import React from 'react'
import Link from 'next/link'

export default () => (
  <nav>
    <li>
      <Link href='/'>
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href='/about'>
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