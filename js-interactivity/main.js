const message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')

    let movie = document.createElement('li')

    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    

    movie.appendChild(movieTitle)
    
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    let ulField = document.querySelector('ul')

    ulField.appendChild(movie)
    inputField.value = " "
}

function deleteMovie(event){
    let title = event.target.parentNode.firstChild.textContent
    event.target.parentNode.remove()
    message.textContent = `${title} Deleted!`
    revealMessage()
}

function crossOffMovie(event){
    let title = event.target.textContent
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')){
        message.textContent = `${title} Watched!`
    } else {
        message.textContent = `${title} Added Back!`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove('hide')
   setTimeout(function(){
       message.classList.add('hide')
   }, 1000) 
}



document.querySelector('form').addEventListener('submit', addMovie)
