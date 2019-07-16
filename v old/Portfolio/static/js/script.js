function Menu() {
	var nav_top = document.getElementById("nav-top");
	var menu_icon = document.getElementById("toggle-menu");

	if (nav_top.className == "nav-top"){
		nav_top.className += "toggle-open";
		menu_icon.innerHTML = "&#10005; Close Menu";
	} else {
		nav_top.className = "nav-top";
		menu_icon.innerHTML = "&#9776; Menu";
	}

}

document.addEventListener('mouseover', function (e) ) {
	var welcomeText = document.getElementById('middle');
	welcometext.className = "middle active";
}, false);