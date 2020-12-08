import React, { Component } from 'react'
import CardList from '../components/CardList'
import Navbar from '../components/Navbar'
import '../styles/align.css'

class Page3 extends Component {
    render() {
        return (
            <div className='appAlign'>
                <Navbar
                    prevLink='/time'
                    prevNum='2'
                    nextLink='/currency'
                    nextNum='4'
                ></Navbar>
                <br/><br/>
                <div>
                    <CardList />
                </div>
            </div>
        )
    }
}

export default Page3
