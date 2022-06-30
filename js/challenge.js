function increment (){
       document.getElementById("plus").addEventListener("click", e => {
        let counter = document.getElementById("counter");
        let number = counter
        counter.textContent = 1
        console.log(counter)
       
    });
   }
increment()