import React from 'react'

export default function PublicToggle() {
    return (
    <div className='public-toggle'>
    <div className="radio">
      <label>
        <input type="radio" value="option1" checked={true} />
        Public
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="option2" />
        Private
      </label>
    </div>
    </div>
    )
}
