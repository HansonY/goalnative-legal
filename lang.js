(function () {
  var KEY = 'gn_lang';
  function apply(l) {
    document.documentElement.className = 'lang-' + l;
    document.documentElement.setAttribute('lang', l === 'zh' ? 'zh-CN' : 'en');
    try { localStorage.setItem(KEY, l); } catch (e) {}
    var btns = document.querySelectorAll('.langtoggle button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-lang') === l);
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    // 初始语言已由 <head> 内联脚本设到 <html> class,这里同步按钮高亮 + 绑定点击
    apply(document.documentElement.classList.contains('lang-zh') ? 'zh' : 'en');
    var btns = document.querySelectorAll('.langtoggle button');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function () { apply(this.getAttribute('data-lang')); });
    }
  });
})();
