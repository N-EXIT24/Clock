const secondArrow = document.querySelector(".s"),
      minuteArrow = document.querySelector(".m"),
      hourArrow   = document.querySelector(".h"),
      hourBox     = document.querySelector(".hours")
      minuteBox   = document.querySelector(".minutes")
      
      
function watch(){
    
    let time = new Date()
    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()
    
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    
    hourBox.innerHTML = hours < 10 ? "0" + hours : hours
    minuteBox.innerHTML = minutes < 10 ? "0" + minutes : minutes
    
    setTimeout(() => watch(), 1000)
    
}
watch()


const links = document.querySelectorAll(".tabsItem")
const tabs = document.querySelectorAll(".tabsContentItem")

console.log(links);

links.forEach((item,i) => {
    item.addEventListener("click", () => {
        removeActive()
        item.classList.add("active")
        tabs[i].classList.add("active")
    })
})

function removeActive(){
    
    links.forEach((item,i) => {
        item.classList.remove("active")
        tabs[i].classList.remove("active")
    })
    
}


const secondsBox = document.querySelector(".stopwatch__seconds"),
      minutesBox = document.querySelector(".stopwatch__minutes"),
      hoursBox   = document.querySelector(".stopwatch__hours"),
      btn        = document.querySelector(".stopwatch__btn"),
      span       = document.querySelector(".tabsLink__span")
   
      
btn.addEventListener("click", () =>{
    if(btn.innerHTML == "start"){
        btn.innerHTML = "stop"
        span.classList.add("active")
        let i = 0
        secundomer(btn,i)
    }else if( btn.innerHTML == "stop"){ 
        btn.innerHTML = "clear"
        span.classList.remove("active")
        span.classList.add('active_clear')
    }else{
        btn.innerHTML = "start"
        span.classList.remove('active_clear')
        secondsBox.innerHTML = 0
        minutesBox.innerHTML = 0
        hoursBox.innerHTML = 0
    }
})


function secundomer(btn,i){
    if(btn.innerHTML == "stop"){
        if(i == 59){
            i = 0
            secondsBox.innerHTML = i
            if(minutesBox.innerHTML == 59){
                minutesBox.innerHTML = 0
                hoursBox.innerHTML++
            }else{
                minutesBox.innerHTML++
            }
        }else{
            i++
            secondsBox.innerHTML = i
        }
        setTimeout(() => secundomer(btn,i), 100)
    }
}