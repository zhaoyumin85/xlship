import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

import Wraper from '../pages/wraper/wraper';//加载顶级包裹成组件
import IndexContainer from '../pages/index/index';//加载首页
import ShipTicket from '../pages/shipTicket/shipTicket';//加载车票列表页
import Destination from '../pages/destination/destination';//加载港口选择页面

const router=(
    <Router history={hashHistory}>
        <Route path="/" component={Wraper}>
            <IndexRoute component={IndexContainer}/>
            <Route path="/destination" component={Destination}/>
            <Route path="/shipTicket/:message" component={ShipTicket} />
        </Route>
    </Router>
);

export default router;
