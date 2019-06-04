
const toogleMenu = () => {
  var menu = document.getElementsByClassName("menu")[0];
  menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

    // init collapsible
    const elems = document.querySelector('.collapsible');
    M.Collapsible.init(elems);
  
    // init sidenav
    const sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
	
	// fload buttom
	const abuttom = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(abuttom);

