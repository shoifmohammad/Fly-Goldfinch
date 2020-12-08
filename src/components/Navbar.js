import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

class Navbar extends Component {

    render() {
    
        var prevBtn = null;
        if(this.props.prevLink) {
            prevBtn = (
                <Link to={this.props.prevLink}>
                    <button className='prevButton'>
                        Page {this.props.prevNum}
                    </button>
                </Link>
            );
        }
    
        var nextBtn = null;
        if(this.props.nextLink) {
            nextBtn = (
                <Link to={this.props.nextLink}>
                    <button className='nextButton'>
                        Page {this.props.nextNum}
                    </button>
                </Link>
            );
        }

        return (
            <React.Fragment>
                <div className='nav'>
                    {prevBtn}
                    {nextBtn}
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;
