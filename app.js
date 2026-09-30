// 简单模拟登录跳转
function doLogin(){
  let user = document.getElementById('username').value;
  let pwd = document.getElementById('password').value;
  if(user && pwd){
    window.location.href = "index.html";
  }else{
    alert("请输入账号密码（任意即可，演示）");
  }
}

// 页面加载高亮侧边栏
document.addEventListener('DOMContentLoaded',function(){
  let path = window.location.pathname;
  let links = document.querySelectorAll('.sidebar-menu a');
  links.forEach(link=>{
    if(link.getAttribute('href') === path.split('/').pop()){
      link.classList.add('active');
    }
  });
});
