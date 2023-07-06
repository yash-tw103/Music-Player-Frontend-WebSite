const togglebutton = document.getElementsByClassName('toggle-button')[0]

const branditems = document.getElementsByClassName('navbar-items')[0]

togglebutton.addEventListener('click' , () =>{
    branditems.classList.toggle('active')
})
