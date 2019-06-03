
const toogleMenu = () => {
  var menu = document.getElementsByClassName("menu")[0];
  menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

    // init collapsible
    let elems = document.querySelector('.collapsible');
    M.Collapsible.init(elems);
  
    // init sidenav
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

