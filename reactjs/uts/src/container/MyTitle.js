import React from 'react'
import './css/MyTitle.css'
import MyLogo1 from '../image/logo_notext.png'
import MyLogo2 from '../image/logo_textonly.png'
function MyTitle() {
    return (
        <div className='my-title'>

            <img className="logo2" src={MyLogo2} alt="logo" />
        </div>
    )
}

export default MyTitle;