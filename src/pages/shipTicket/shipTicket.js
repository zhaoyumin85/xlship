import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import './shipTicket.css';

export default class ShipTicket extends Component{
    render(){
        console.log(this.props.params);
        const {message}=this.props.params;
        //获取路径参数，根据路径参数做UI匹配
        return(<h1 className='ship_ticket'>ShipTicket,{message}</h1>)
    }
}
