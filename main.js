// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const articles = collectArticles()
const hearts = collectHearts()

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
// Your JavaScript code goes here!
function toggleHeart(target) {
  if (target.innerText == EMPTY_HEART) {
    target.innerText = FULL_HEART
    target.setAttribute('class', 'activated-heart')
  } else {
    target.innerText = EMPTY_HEART
    target.removeAttribute('class')
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  articles.map( (article, index) => {
    article.addEventListener('click', event => {
      toggleHeart(hearts[index])  
    })
  })
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
