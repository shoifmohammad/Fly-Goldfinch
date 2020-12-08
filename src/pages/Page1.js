import React, { Component } from 'react'
import Counter from '../components/Counter'
import Navbar from '../components/Navbar'
import '../styles/align.css'

class Page1 extends Component {
    render() {
        return (
            <div className='appAlign'>
                <Navbar
                    prevLink='/currency'
                    prevNum='4'
                    nextLink='/time'
                    nextNum='2'
                ></Navbar>
                <br/><br/>

                <div>
                    <Counter />
                </div>
            </div>
        )
    }
}

export default Page1
