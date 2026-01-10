import React from 'react'

const MiniCard = ({ title, icon, number, footerNum }) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <button>{icon}</button>
        </div>
        <div>
            <h1>{number}</h1>
            <h1>{footerNum} than yesterday</h1>
        </div>
    </div>
  )
}

export default MiniCard
