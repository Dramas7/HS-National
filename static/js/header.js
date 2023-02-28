$(function () {

  /******************************* 导航栏链接的跳转及状态提示 ***********************************/
  (function () {
    // 根据每个页面的pathname信息为相应的导航连接添加样式
    let { pathname } = location;
    switch (pathname) {
      case '/home.html':
        $('[data-home').addClass('active');
        break;
      case '/information.html':
        $('[data-information').addClass('active');
        break;
      case '/contact.html':
        $('[data-contact').addClass('active');
        break;
      case '/introduce.html':
        $('[data-introduce').addClass('active');
        break;
      case '/participate.html':
        $('[data-participate').addClass('active');
        break;
      case '/project.html':
        $('[data-project').addClass('active');
        break;
    }

    // 为每个导航连接绑定点击跳转事件
    $('.nav')
    $('.nav-list a').bind('click', function () {
      // 建立条件判断当前链接按钮是否激活，若是，则不做动作
      if ($(this).attr('class') == undefined || !$(this).attr('class').includes('active')) {
        switch (Object.keys(this.dataset)[0]) {
          case 'home':
            $(window).attr('location', '/home.html');
            break;
          case 'information':
            $(window).attr('location', '/information.html');
            break;
          case 'contact':
            $(window).attr('location', '/contact.html');
            break;
          case 'introduce':
            $(window).attr('location', '/introduce.html');
            break;
          case 'participate':
            $(window).attr('location', '/participate.html');
            break;
          case 'project':
            $(window).attr('location', '/project.html');
            break;
        }
      }
    });
  })();

  /******************************* 菜单栏 ***********************************/
  (function () {
    $('.menu-btn').click(function () {
      // 切换按钮自身的样式
      $(this).toggleClass('active');
      // 展开下拉列表
      $(this).siblings('.drop-down-area').slideToggle();
    });
  })();

  /******************************* 语言栏 ***********************************/
  (function () {
    // 定义中文，英文的激活状态，默认中文激活
    let chineseActive = true;
    let englishActive = false;

    // 定义根据元素节点状态对元素节点进行渲染的函数
    function changeStyle() {
      chineseActive ? $('.chinese').addClass('active') : $('.chinese').removeClass('active');
      englishActive ? $('.english').addClass('active') : $('.english').removeClass('active');
    }

    // 先调用一次渲染函数进行初始化
    changeStyle();

    // 为语言栏按钮定义点击事件
    $('.langue-bar a').bind('click', function () {
      if (!$(this).attr('class').includes('active')) {
        // 更改状态
        chineseActive = !chineseActive;
        englishActive = !englishActive;
        // 重新渲染页面
        changeStyle();
      }
    });
  })();
})