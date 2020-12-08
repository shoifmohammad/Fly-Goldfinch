import React, { Component } from 'react'
import Timer from '../components/Timer'
import Navbar from '../components/Navbar'
import '../styles/align.css'

class Page2 extends Component {
    render() {
        return (
            <div className='appAlign'>
                <Navbar
                    prevLink='/home'
                    prevNum='1'
                    nextLink='/data'
                    nextNum='3'
                ></Navbar>
                <br/><br/>
                <div>
                    <Timer />
                </div>
            </div>
        )
    }
}

export default Page2
