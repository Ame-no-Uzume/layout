const openPopup = document.getElementById('button');
const popup = document.getElementById('popup');

openPopup.addEventListener('click', function(e){
    e.preventDefault();
    popup.classList.add('active');
})

popup.addEventListener('click', function(e){
    e.preventDefault();
    if (e.target != popup){
        popup.classList.remove('active');
    }
})