import React from 'react'
import './AppDownload.css'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For more better experience<br/> Download the app from the store</p>
        
      <div className="app-download-platform">
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Download from Play Store" className="store-image" />
      <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download from Apple Store" className="store-image" />
      </div>
    </div>
  )
}

export default AppDownload
