import React from 'react'
import mobiles from './data/mobiles'
import MobileCard from './components/MobileCard'

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>📱 All Mobile Details</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px',
        marginTop: '20px'
      }}>
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>
    </div>
  )
}
