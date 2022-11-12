// header projects
let headerBurger = document.querySelector('.header_projects_button');
let headerProjects = document.querySelector('.header_project_row');
let headerBurgerActive = document.querySelector('.header_projects_button-active');

headerBurger.addEventListener('click', () => {
    if (headerBurger.classList.contains('active') || headerBurgerActive.classList.contains('active')) {
        headerProjects.classList.remove('active');
        headerBurgerActive.classList.remove('active');
    } else {
        headerProjects.classList.add('active');
        headerBurgerActive.classList.add('active');
    }
})

headerBurgerActive.addEventListener('click', () => {
    if (headerProjects.classList.contains('active')) {
        headerProjects.classList.remove('active');
    }
})

// header projects

// stories video play
let storieVideoPlay = document.querySelectorAll('.stories_video_play');

storieVideoPlay.forEach(trigger => {
    let storieVideo = document.getElementById(trigger.previousElementSibling.id);

    trigger.addEventListener('mouseenter', () => {
        storieVideo.play();
        storieVideo.parentNode.classList.add('active');
    })

    storieVideo.addEventListener('mouseleave', () => {
        storieVideo.pause();
        storieVideo.parentNode.classList.remove('active');
    })
})
// stories video play

var toggle = document.getElementById('container');
var toggleContainer = document.getElementById('toggle-container');
var toggleNumber;

toggle.addEventListener('click', function() {
	toggleNumber = !toggleNumber;
	if (toggleNumber) {
		toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
		toggleContainer.style.backgroundColor = '#E7C99F';
        toggleContainer.style.border = '0px';
	} else {
		toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
		toggleContainer.style.backgroundColor = '#E7C99F';
        toggleContainer.style.border = '0px';
	}
	console.log(toggleNumber)
});

var toggleTriple = document.getElementById('containerTriple');
var toggleContainerTriple = document.getElementById('toggle-container-triple');
var toggleNumberTriple;

toggleTriple.addEventListener('click', function() {
	if (toggleNumberTriple == 1) {
		toggleContainerTriple.style.clipPath = 'inset(0px 33% 0px 33%)';
		toggleContainerTriple.style.backgroundColor = '#E7C99F';
        toggleContainerTriple.style.border = '0px';
	} else if(toggleNumberTriple == 2) {
        toggleContainerTriple.style.clipPath = 'inset(0px 33% 0px 33%)';
		toggleContainerTriple.style.backgroundColor = '#E7C99F';
        toggleContainerTriple.style.border = '0px';
    } else if(toggleNumberTriple == 3) {
		toggleContainerTriple.style.clipPath = 'inset(0 66% 0 0)';
		toggleContainerTriple.style.backgroundColor = '#E7C99F';
        toggleContainerTriple.style.border = '0px';
	}
	console.log(toggleNumberTriple)
});