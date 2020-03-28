const endPannel = document.querySelector(".endOfSimulation")
let seconds = 25

const decompte = ()=>{
    const timer = window.setInterval(tryIt = () =>{
        seconds--
        console.log(seconds)
        if(seconds === 0){
            clearInterval(timer)
            console.log("finish")
            endPannel.classList.add("endOfSimulationIsActivated")
        }
    },1000)
}