// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const articles = collectArticles()

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
    target.style.color = 'red'
  } else {
    target.innerText = EMPTY_HEART
    target.removeAttribute('style')
  }
}

document.addEventListener('DOMContentLoaded', ()=>{
  articles.map( article => {
    let like = article.querySelector('li')
    let heart = like.querySelector('span')
    like.addEventListener('click', toggleHeart(like.querySelector('span')))
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
