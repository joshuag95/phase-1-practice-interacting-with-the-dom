const counterElement = document.querySelector("#counter");
const minusElement = document.getElementById("minus");
const heartElement = document.getElementById("heart");
const likesContainer = document.querySelector('ul.likes');
minusElement.addEventListener("click", () => {
 const stringNum = counterElement.textContent
 const num1 = parseInt(stringNum);
 counterElement.textContent = num1 - 1
});

const plusElement = document.getElementById("plus");

plusElement.addEventListener("click", increment);

function increment(){
    const stringNum = counterElement.textContent
    const num1 = parseInt(stringNum)
    counterElement.textContent = num1 + 1
};

heartElement.addEventListener("click", () => {
    const currentNumber = counterElement.innerHTML
    
    
    const likeElement = document.getElementById(`likes-${currentNumber}`)
    if (!likeElement){
        const li = document.createElement('li');
        li.id=`likes-${currentNumber}`;
        const string = `${currentNumber} has been liked <span>1</span> times`
        li.innerHTML= string
        likesContainer.append(li)

    }else{
                const innerSpanElement = likeElement.querySelector("span")
                const currenLikeNumberAsAString = innerSpanElement.textContent
                const likeNumber = parseInt(currenLikeNumberAsAString);
                innerSpanElement.textContent = likeNumber + 1;
    }
   
    
    
})

const formElement = document.getElementById("comment-form");

const commentContainer = document.querySelector('div.comments');

formElement.addEventListener('submit', (e) =>{
    e.preventDefault()
    const userInput = e.target.comment.value
    const p = document.createElement('p')
    p.innerText = userInput
    commentContainer.append(p)

    e.target.reset()

    
})
const pauseButton = document.getElementById('pause');
let paused = false
let timerId = setInterval(() => {
    increment()
 }, 1000)
pauseButton.addEventListener('click', () => {
    if (paused){
        timerId = setInterval(() => {
            timerId = setInterval(() => {
                increment()
             }, 1000)
            const buttons = [minusElement, plusElement, heartElement]
            buttons.forEach( button => button.disabled = false)
        })
    }else{
        const buttons = [minusElement, plusElement, heartElement]
        buttons.forEach( button => button.disabled = true)
        clearInterval(timerId)
    }
    
})

