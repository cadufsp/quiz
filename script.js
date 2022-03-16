

const btnFalse = document.getElementById("btn-fake")
const btnTrue = document.getElementById("btn-fato")
const screenNews = document.getElementById("card-top")
const btnContinue = document.getElementById("btn-continuar")
const screenAnswer = document.getElementById("card-down")
const counter = document.getElementById("number-counter")
const cardContainer = document.getElementById("cards")
var allowAnswer = true
var countNews = 0
var countPoints = 0


const news = [
    {
        idNews: 1,
        newsContent: "Notícia 1",
        verify: true,
        answer: "Resposta 1"
    },

    {
        idNews: 2,
        newsContent: "Notícia 2",
        verify: false,
        answer: "Resposta 2"
    },

    {
        idNews: 3,
        newsContent: "Notícia 3",
        verify: true,
        answer: "Resposta 3"
    },

    {
        idNews: 4,
        newsContent: "Notícia 4",
        verify: false,
        answer: "Resposta4"
    }
]



const verifyAnswer = (res) => {
   verifyNews(res)
   showAnswer()
   flipCard()
}

const addNews = () => {
    screenNews.innerHTML = news[countNews].newsContent
}


const verifyNews = (res) => {

    if(res===news[countNews].verify && allowAnswer){
        countPoints++;
        counter.innerHTML = countPoints
    } 

    allowAnswer = false
    
}
   

const toContinue = ()=>{
    if(countNews > 2){
        window.location.assign("./index.html");    
        return
    }
    allowAnswer = true
    countNews++
    console.log(countNews)
    addNews()
    cardContainer.classList.toggle("active")
    btnContinue.classList.toggle("visibility")
}

const showAnswer = () =>{
    screenAnswer.innerHTML = news[countNews].answer
}

const flipCard = () =>{
    cardContainer.classList.toggle("active")
    btnContinue.classList.toggle("visibility")
}

const verifyEnd = () =>{
    if(countNews > 2){
        window.location.assign("./index.html");    }
}


btnTrue.addEventListener("click", () => {
    verifyAnswer(true);
})

btnFalse.addEventListener("click", () => {
    verifyAnswer(false);
})

btnContinue.addEventListener("click", toContinue)

addNews()
