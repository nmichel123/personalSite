import React from 'react';
import './style.css';

class Navbar extends React.Component{
    render () {
        return (
            <div className='Nav'>
                <a>Cup</a>
                <a>Boxcar</a>
                <a>Product</a>
            </div>
        )
    }
}

export default Navbar