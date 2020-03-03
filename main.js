// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const articles = collectArticles()
const hearts = collectHearts()
const errorModal = document.querySelector('div#modal')

function collectHearts() {
    const heartsRaw = document.querySelectorAll('li > span')
    let hearts = []
    heartsRaw.forEach( heart => {
      hearts.push(heart)
    })
    return hearts
}
function collectArticles() {
  const articlesRaw = document.querySelectorAll('article')
  let articles = []
  articlesRaw.forEach( article => {
    articles.push(article)
  })
  return articles
}

function toggleHeart(target) {
  if (target.innerText == EMPTY_HEART) {
    target.innerText = FULL_HEART
    target.setAttribute('class', 'activated-heart')
  } else {
    target.innerText = EMPTY_HEART
    target.removeAttribute('class')
  }
}

function toggleHeartEventListener() {
  articles.map( (article, index) => {
    article.addEventListener('click', event => {
      if (event.target.matches('li')) {
        mimicServerCall()
        .then( response => console.log(response))
        .then(toggleHeart(hearts[index]))
        .catch( error => flashError(error))
      }
    })
  })
}

function flashError(message) {
  const errorMessage = document.getElementById('modal-message')
  errorModal.removeAttribute('class')
  errorMessage.innerText = message
  setTimeout(removeError, 5000)
}

function removeError() {
  errorModal.setAttribute('class', 'hidden')
}

document.addEventListener('DOMContentLoaded', ()=>{
  toggleHeartEventListener()
})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
