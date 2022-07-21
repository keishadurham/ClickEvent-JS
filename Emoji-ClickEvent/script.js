const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');

//Add event listeners

closedFace.addEventListener('click', () => {
if (openFace.classList.contains('open')) {   
    openFace.classList.add('active'); // Triggers the active class so it displays the open face 
    closedFace.classList.remove('active'); // Removes closed face from the page
}
});

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active'); //Removes open face from the page   
    }
});