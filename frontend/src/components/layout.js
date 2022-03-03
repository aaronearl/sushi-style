import React from 'react'
import Navigation from './Navigation'
export default function Layout({ children }) {
  return (
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Navigation />
      {children}
    </div>
  )
}
