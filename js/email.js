function show_uname(){
    var uname=document.getElementsByClassName("login_name")[0];
    uname.setAttribute("class","login_name border_blue");
}
function show_upwd(){
    var upwd=document.getElementsByClassName("login_upwd")[0];
    upwd.setAttribute("class","login_upwd border_blue");
}
function drop_uname(){
    var uname=document.getElementsByClassName("login_name")[0];
    uname.setAttribute("class","login_name");
}
function drop_upwd(){
    var upwd=document.getElementsByClassName("login_upwd")[0];
    upwd.setAttribute("class","login_upwd");
}