import React from 'react';
import './App.css';

export class Loader extends React.Component {

    render() {
        // const {bool} = this.props
        const bool = true
        return <div className="LoaderWrapper">
            {bool && <div className="loader">

            </div>
            }
        </div>

    }
}

export default Loader;
