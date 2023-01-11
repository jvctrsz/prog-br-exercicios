const controls = document.querySelectorAll('.control');

let currentItem = 0;
const items = document.querySelectorAll('.item');

const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click',() =>{
        const isBefore = 
        control.classList.contains('before-arrow')  
        
        if(isBefore){
            currentItem -= 1;
        } else {
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }
        if(currentItem < 0){
            currentItem = maxItems -1;
        }

        items[currentItem].scrollIntoView({
            // inline:'center',
            behavior:'smooth'
        })

        console.log('control', isBefore, currentItem)
    })
})
