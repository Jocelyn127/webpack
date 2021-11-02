'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';
import time from './images/time.png';
 
class Search extends  React.Component {
    render(){
        return <div className="search-text">
            Search text <img src = {time}/>
        </div>
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
)