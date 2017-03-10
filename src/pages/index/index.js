import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import {Link,IndexLink,browserHistory} from 'react-router';
import getAllInfo from './utils';
import './index.css';

//容器组件
class IndexContainer extends Component{
  constructor(){
      super();
      this.state={
          navList:[{id:0,txt:"单程"},{id:1,txt:"往返"}],
          currentNav:0,//当前选中的是哪个
          isChecked:true//订票须知是否选中
      }
      this.updateNav=this.updateNav.bind(this);
      this.checkUpdate=this.checkUpdate.bind(this);
      this.purchase=this.purchase.bind(this);
  }
  componentDidMount(){

      //钩子函数，离开页面前的提示信息
     // this.context.router.setRouteLeaveHook(this.props.route,this.leaveHook)
  }
  leaveHook(nextLocation){
      return '确定离开?';
  }
  updateNav(e){
      let clickedIdx=e.target.dataset.idx;//这里可以获取到当前点击的data-idx的值
      this.setState({
          currentNav:clickedIdx
      })
  }
  checkUpdate(){

      if(this.state.isChecked){
          this.setState({
              isChecked:false
          })
      }
      else{
          this.setState({
              isChecked:true
          })
      }
  }
  purchase(){
      //const path='/shipTicket/es';
      const path='/destination';
      //console.log(this.context);
      //browserHistory.push(path);//跳转方法一
      //this.context.router.push(path);//跳转方法二
    //   this.context.router.push({
    //      pathname: path,
    //      query: {
    //         id: 'aa',
    //         name:'bb'
    //      }
     //
    //  });//跳转方法三

     this.context.router.push(
         {
             pathname:path,
             state:{item:"hello"}
         }
     );//跳转方法四

  }


  render(){
      var data=getAllInfo('zhaoyumin85');
      //console.log(data);

      let {navList,currentNav}=this.state;
      return(
          <div>
              <HeaderComponent navList={navList} currentNav={currentNav} clickHandler={this.updateNav}/>
              <TabContContainer routerContext={this.context.router}/>
              <div className="idx_mgr">
                  <BtnBlue btnEventHandler={this.purchase}>立即购票</BtnBlue>
              </div>
              <CheckBox isChecked={this.state.isChecked} checkUpdateHandler={this.checkUpdate}>我已阅读并同意<a>《订票须知》</a>的条款</CheckBox>

          </div>
      );
  }
}
//第二种router跳转方式，此处必须
IndexContainer.contextTypes={
    router:React.PropTypes.object
}

export default IndexContainer;//对外暴露接口

//展示组件 顶部
// class HeaderComponent extends Component{
//
//   render(){
//       return(
//           <div className="index_nav_wrap border b_btm">
//               <HeaderTap {...this.props}/>
//               <BtnPerson />
//           </div>
//       );
//   }
// }

//ES6 stateless function 等同上面
const HeaderComponent=(props)=>{
    return(
        <div className="index_nav_wrap border b_btm">
            <HeaderTap {...props}/>
            <BtnPerson />
        </div>
    )
}

//展示组件 顶部子组件
class HeaderTap extends Component{

    render(){
        let {navList,currentNav,clickHandler}=this.props;
        var htmlNavList=navList.map(function(obj,idx){
            var className=currentNav==idx?"index_nav_list on":"index_nav_list";
            return <span className={className} data-idx={idx}  onClick={clickHandler} key={'nav_'+idx}>{obj.txt}</span>
        });
        return (
            <div className="index_nav">
                {htmlNavList}
            </div>

        );
    }

};
//展示组件 顶部头像按钮
const BtnPerson = () => (
  <div className="index_btn_person"></div>
);

//出行选择 容器
class TabContContainer extends Component{
    render(){
        return(
            <div className="tab_cont">
                <LocatCompt label="出发港" icon="shipGo" url="/destination?type=go" />
                <LocatCompt label="到达港" icon="shipRtn" url="/destination?type=return" />
                <DateCompt label="出发日期" />
            </div>
        )
    }
}

//地址组件
class LocatCompt extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div className="tab_list border b_btm">
                <label className={this.props.icon} >{this.props.label}</label>
                <Link to={this.props.url}>深圳蛇口</Link>
            </div>
        )
    }

};
//日期组件
class DateCompt extends Component {

    render(){
        return(
            <div className="tab_list">
                <label className="iconTime">{this.props.label}</label><span ref="datePicker">2017-02-17</span>
            </div>
        )
    }

};

class BtnBlue extends Component {
    constructor(){
        super();
        this.btnEventHandle=this.btnEventHandle.bind(this);
    }
    btnEventHandle(){
        //console.log(11);
        this.props.btnEventHandler();
    }

    render(){
        return(
            <div className="btn btn_blue " onClick={this.btnEventHandle}>{this.props.children}</div>
        )
    }


};

class CheckBox extends Component{
    constructor(){
        super();
        this.checkUpdate=this.checkUpdate.bind(this);

    }
    checkUpdate(){

        this.props.checkUpdateHandler();

    }
    render(){
        var  isChecked=this.props.isChecked;
        let className=isChecked?"check_box on":"check_box";

        return(
            <div className="check_wrap">
                <span className={className} onClick={this.checkUpdate}></span>
                <span className="check_txt">{this.props.children}</span>
            </div>
        )
    }
}
