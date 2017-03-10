import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './destination.css';
import {Link,IndexLink,browserHistory} from 'react-router';
import getAvailableDes from './data';
class Destination extends Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props.location);
        getAvailableDes('YUMIN');
        return(
            <ul className="des_wrap">
                <li className="border b_btm "><span>深圳蛇口</span></li>
                <li className="border b_btm"><span>澳门外港</span></li>
                <li className="border b_btm"><span>香港机场</span></li>
                <li className="border b_btm"><span>珠海九洲</span></li>
            </ul>
        )
    }
}

export default Destination;
