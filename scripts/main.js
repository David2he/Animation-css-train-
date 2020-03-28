const activeSignWindow = document.querySelector(".signClick")
const signDestination = document.querySelector(".directionScreen")
const closeSignWindow = document.querySelector(".linkToCloseDirectionScreenContent")
const linkTriggeredFrontTrain = document.querySelectorAll(".JsLinkDirection")
const frontTrain = document.querySelector(".trainFront")
const frontTrainDoor1Animation = frontTrain.querySelectorAll(".inDoorPart1WillbeAnimated")
const frontTrainDoor2Animation = frontTrain.querySelectorAll(".inDoorPart2WillbeAnimated")


activeSignWindow.addEventListener("click", (event) =>
{
    signDestination.classList.add("directionScreenIsActivated")
    event.preventDefault()
})

closeSignWindow.addEventListener("click", (event) =>
{
    signDestination.classList.remove("directionScreenIsActivated")
    event.preventDefault()
})

for(let i = 0; i < linkTriggeredFrontTrain.length; i++)
{
    linkTriggeredFrontTrain[i].addEventListener("click", (event) =>
    {
        signDestination.classList.remove("directionScreenIsActivated")
        frontTrain.classList.toggle("transitionFront")
        for(let i = 0; i < frontTrainDoor1Animation.length; i++)
        {
        frontTrainDoor1Animation[i].classList.toggle("inDoor1IsAnimated")
        frontTrainDoor2Animation[i].classList.toggle("inDoor2IsAnimated")
        console.log("hehe")
        }
            event.preventDefault()  
    })
}

