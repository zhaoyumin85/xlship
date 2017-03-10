import React,{Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './wraper.css';

class Wraper extends Component{
    render(){
        return(

                <div className="main">
                    <ReactCSSTransitionGroup className="app"
                        transitionName="app" component="div"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                        <div className="content" key={this.props.location.pathname}>
                            {this.props.children}
                        </div>
                    </ReactCSSTransitionGroup>
                </div>

        )
    }
}
export default Wraper;
