let headerBurger=document.querySelector(".header_projects_button"),headerProjects=document.querySelector(".header_project_row"),headerBurgerActive=document.querySelector(".header_projects_button-active"),storieVideoPlay=(headerBurger.addEventListener("click",()=>{headerBurger.classList.contains("active")||headerBurgerActive.classList.contains("active")?(headerProjects.classList.remove("active"),headerBurgerActive.classList.remove("active")):(headerProjects.classList.add("active"),headerBurgerActive.classList.add("active"))}),headerBurgerActive.addEventListener("click",()=>{headerProjects.classList.contains("active")&&headerProjects.classList.remove("active")}),document.querySelectorAll(".stories_video_play"));storieVideoPlay.forEach(e=>{let t=document.getElementById(e.previousElementSibling.id);e.addEventListener("mouseenter",()=>{t.play(),t.parentNode.classList.add("active")}),t.addEventListener("mouseleave",()=>{t.pause(),t.parentNode.classList.remove("active")})});var toggleNumber,toggleNumberTriple,toggle=document.getElementById("container"),toggleContainer=document.getElementById("toggle-container"),toggleTriple=(toggle.addEventListener("click",function(){toggleNumber=!toggleNumber,toggleContainer.style.clipPath=toggleNumber?"inset(0 0 0 50%)":"inset(0 50% 0 0)",toggleContainer.style.backgroundColor="#E7C99F",toggleContainer.style.border="0px",console.log(toggleNumber)}),document.getElementById("containerTriple")),toggleContainerTriple=document.getElementById("toggle-container-triple");toggleTriple.addEventListener("click",function(){1==toggleNumberTriple||2==toggleNumberTriple?(toggleContainerTriple.style.clipPath="inset(0px 33% 0px 33%)",toggleContainerTriple.style.backgroundColor="#E7C99F",toggleContainerTriple.style.border="0px"):3==toggleNumberTriple&&(toggleContainerTriple.style.clipPath="inset(0 66% 0 0)",toggleContainerTriple.style.backgroundColor="#E7C99F",toggleContainerTriple.style.border="0px"),console.log(toggleNumberTriple)});