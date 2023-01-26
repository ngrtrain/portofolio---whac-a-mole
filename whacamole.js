const getcontent = document.getElementsByClassName('content')[0]
for(let i = 0; i < 12; i++){
    const createdivforplay = document.createElement('div')
    getcontent.appendChild(createdivforplay)
}
const getdivincontent = document.querySelectorAll('.content div')
const getresult = document.querySelectorAll('#result h1')[1]
const gettitleresult = document.querySelectorAll('#result h1')[0]
const buttonforstart = document.querySelector('button')
const minutesid = document.getElementById('minutes')
const secondid = document.getElementById('second')
let score = 0
let intervalgame;
let intervaltimer;
let minutes = 0;
let second = 0;
const buttonfortryagain = document.createElement('button')
const textbuttonfortryagain = document.createTextNode('Try again?')
buttonfortryagain.appendChild(textbuttonfortryagain)
const getresultid = document.getElementById('result')
function startthegame(){
    for(let i = 0; i < getdivincontent.length; i++){
        getdivincontent[i].classList.remove('test')
        getdivincontent[i].innerHTML = ""
    }
    randomnumber = Math.floor(Math.random() * 12)
    getdivincontent[randomnumber].classList.add('test')
    getdivincontent[randomnumber].innerHTML = "mole"
    getdivincontent[randomnumber].style.display = 'flex'
    getdivincontent[randomnumber].style.justifyContent = 'center'
    getdivincontent[randomnumber].style.alignItems = 'center'
}
buttonforstart.addEventListener('click',function(){
    intervalgame = setInterval(startthegame,300)
    buttonforstart.style.display = 'none'
    intervaltimer = setInterval(() => {
        second++
        if(second <= 9){
            secondid.innerHTML = "0"+second
        }
        if(second > 9){
            secondid.innerHTML=second
        }
        if(second>59){
            second = 0
            secondid.innerHTML = "0"+second
            minutes++
            minutesid.innerHTML = "0"+minutes
        }
        if(minutes == 2){
            clearInterval(intervaltimer)
            clearInterval(intervalgame)
            getcontent.style.display = 'none'
            gettitleresult.innerHTML = 'Congratulation! this is your Result!'
            getresultid.appendChild(buttonfortryagain)
        }
    }, 1000);
})
for(let i = 0; i<getdivincontent.length;i++){
    getdivincontent[i].addEventListener('click',function(e){
        if(e.target.classList.contains('test')){
            score += 10
            getresult.innerHTML = 'Score : ' + score
        }
    })
}
buttonfortryagain.addEventListener('click',function(){
    window.location.href = 'whacamole.html'
})