document.addEventListener('DOMContentLoaded', () => {
    const rock = document.querySelector('.rock')
    const paper = document.querySelector('.paper')
    const scissors = document.querySelector('.scissors')

    rock.addEventListener('click',event => {
        console.log('rock clicked')
    })
    paper.addEventListener('click',event => {
        console.log('paper clicked')
    })
    scissors.addEventListener('click',event => {
        console.log('scissors-clicked')
    })

})