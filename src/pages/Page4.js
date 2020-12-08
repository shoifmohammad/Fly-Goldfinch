import React, { Component } from 'react'
import Converter from '../components/Converter'
import Navbar from '../components/Navbar'
import '../styles/align.css'

class Page4 extends Component {
    render() {
        return (
            <div className='appAlign'>
                <Navbar
                    prevLink='/data'
                    prevNum='3'
                    nextLink='/home'
                    nextNum='1'
                ></Navbar>
                <br/><br/>

                <div>
                    <Converter />
                </div>
            </div>
        )
    }
}

export default Page4
