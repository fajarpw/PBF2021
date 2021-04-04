import React, { Component } from 'react'
import AboutUser from '../components/AboutUser'
import './css/MyAbout.css'

class MyAbout extends Component {
    render() {
        return (
            <div className='my-about'>
                <AboutUser nama="Fajar Pandu" nim="1841720175" kelas="TI3H" gambar="https://i.picsum.photos/id/439/536/354.jpg?hmac=cr_mJl3_TiOZLEY3Q90ui03r-EKYwrz-Ij5z3WPhSHo"/>
            </div>
        )
    }
}

export default MyAbout;