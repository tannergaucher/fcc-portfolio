

window.onscroll = function test(){
  console.log('scrolling')
  let nav = document.getElementById('navbar');
  console.log(nav);
  nav.classList.add('test');
}