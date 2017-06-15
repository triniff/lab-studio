//MENU
 window.addEventListener('scroll', function () {
   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
   shrinkOn = 50,
   headerEl = document.getElementsByTagName("nav")[0];

   if (distanceY > shrinkOn) {
     headerEl.classList.add("scroll-menu");
   } else {
     headerEl.classList.remove("scroll-menu");
   }

   var services = document.getElementById("services");
   var menuServices= document.getElementsByClassName("services")[0];

   var portfolio = document.getElementById("portfolio");      
   var menuPortfolio = document.getElementsByClassName("portfolio")[0];

   var about = document.getElementById("about");     
   var menuAbout = document.getElementsByClassName("about")[0];

   var team = document.getElementById("team");
   var menuTeam = document.getElementsByClassName("team")[0];

   var contact = document.getElementById("contact");		
   var menuContact = document.getElementsByClassName("contact")[0];

   if(distanceY >= 700){
   		menuServices.classList.add("menu-scroll-hover"); // cambiando el color a portfolio
   } else if (distanceY < 700) {
   		menuServices.classList.remove("menu-scroll-hover");

   }
 	if(distanceY >= 1200){
   		menuPortfolio.classList.add("menu-scroll-hover");	// cambiando el color a about
   		menuServices.classList.remove("menu-scroll-hover");

 	}  else if(distanceY >= 1200 || distanceY <= 1200){
         menuPortfolio.classList.remove("menu-scroll-hover");
   }
   if(distanceY >= 2200){
         menuAbout.classList.add("menu-scroll-hover"); // cambiando el color de contact
         menuPortfolio.classList.remove("menu-scroll-hover");

   }else if (distanceY >= 3900 || distanceY <= 2200) {
         menuAbout.classList.remove("menu-scroll-hover");
   }
   if(distanceY >= 3900){
         menuTeam.classList.add("menu-scroll-hover"); // cambiando el color de contact
         menuAbout.classList.remove("menu-scroll-hover");

   }else if (distanceY >= 3900 || distanceY <= 3900) {
         menuTeam.classList.remove("menu-scroll-hover");
   }
    if(distanceY >= 4850){
         menuContact.classList.add("menu-scroll-hover"); // cambiando el color de contact
         menuTeam.classList.remove("menu-scroll-hover");

   }else if (distanceY >= 4850 || distanceY <= 4850) {
      menuContact.classList.remove("menu-scroll-hover");
   }
 });