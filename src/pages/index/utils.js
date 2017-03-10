import axios from 'axios';
/*
*获取用户基本信息
*/
function getUserInfo(username){
    //这种方式 不会直接返回数据 结果是pending，主要用于组合请求。
    return axios.get(`https://api.github.com/users/zhaoyumin85`);
    //以下方式 会直接返回数据
    //var url=`https://api.github.com/users/${username}`;
    // axios.get(url)
    //      .then(function (response) {
    //          console.log(response);
    //      })
    //      .catch(function (error) {
    //          console.log(error);
    //      });
}
//获取用户仓库信息
function getUserRepos(username){
    return axios.get(`https://api.github.com/users/${username}/repos`);
}
//同时发送两条请求
function getAllInfo(username){
    //console.log(username);
    axios.all([getUserInfo(username),getUserRepos(username)]).then(arr=>{
        //console.log(arr);
    })
}
export default getAllInfo;
