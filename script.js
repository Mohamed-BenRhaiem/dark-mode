const switcher = document.querySelector('.switcher-wrapper')

const ball = document.querySelector('.ball')

const crescentMoon = document.querySelector('img#crescent')

const sunImage = document.querySelector('img#sun')

switcher.addEventListener('click',(e) => {
       
        if (ball.style.left==='28px') {
            ball.style.left='5px'
            ball.style.transition='.3s'
            ball.style.opacity='.5'
            crescentMoon.style.display = 'block'
            sunImage.style.display = 'none'
            document.body.style.backgroundColor = '#333'

             e.currentTarget.style.backgroundColor=getComputedStyle(document.documentElement).getPropertyValue('--dark-color')
    
        }
        else{
            ball.style.left='28px'
            ball.style.transition='.3s'
            ball.style.opacity='1'

            ball.style.backgroundColor='#fff'

             e.currentTarget.style.backgroundColor=getComputedStyle(document.documentElement)
             .getPropertyValue('--light-color');
             crescentMoon.style.display = 'none'
             sunImage.style.display = 'block'
            document.body.style.backgroundColor = '#fff'

        }
})