const hrHand = document.querySelector('.hour')
const minHand = document.querySelector('.min')
const secHand = document.querySelector('.sec')
const themeBtn = document.querySelector('.toggle-btn')


function getSetClock(){
    const time = new Date()

    const hr = time.getHours() %12
    const min = time.getMinutes()
    const sec = time.getSeconds()

    hrHand.style.transform = `translate(-50%,-100%) rotate(${30*hr}deg)`
    minHand.style.transform = `translate(-50%,-100%) rotate(${6*min}deg)`
    secHand.style.transform = `translate(-50%,-100%) rotate(${6*sec}deg)`
}

setInterval(()=>{
    getSetClock()
},1000)

themeBtn.addEventListener('click',()=>{
    console.log("CLICKED")
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
       themeBtn.innerHTML = "TURN OF LIGHTS" 
    }else{
       themeBtn.innerHTML = "TURN ON LIGHTS" 
    }
    html.classList.toggle('dark')
})