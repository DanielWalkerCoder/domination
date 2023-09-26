let unordered = document.querySelector('ul')
let unorderedItems = document.querySelectorAll('ul li')
let images = document.querySelectorAll('img')
let uglyWebby = document.querySelector('title')

function strikeFirst(){
    unorderedItems[0].style.textDecoration = 'line-through'
}

strikeFirst()

function changeSrc(elementID, URL){
    document.querySelector(`#${elementID}`).src = URL
}

changeSrc('image-1', 'https://as1.ftcdn.net/v2/jpg/01/12/43/90/1000_F_112439022_Sft6cXK9GLnzWjjIkVMj2Lt34RcKUpxm.jpg')
changeSrc('image-2', 'https://t4.ftcdn.net/jpg/01/14/76/75/240_F_114767519_SU0fo0t7h35T1J4vY5ldeBmnSrJyKf3c.jpg')
changeSrc('image-3', 'https://t4.ftcdn.net/jpg/06/01/87/43/240_F_601874312_enpTeqDxwnkuFibrbSnxpuuyN9KzYMWc.jpg')

function removeFirst(){
    unordered.removeChild(unorderedItems[0])
    unorderedItems = document.querySelectorAll('ul li')
}

removeFirst()
removeFirst()

function changeFontSize(newFontSize, elementID){
    document.querySelector(`#${elementID}`).style.fontSize = `${newFontSize}px`
}

changeFontSize('50', 'heading')

let newElement = document.createElement('img')
newElement.src = 'https://t4.ftcdn.net/jpg/06/01/87/43/240_F_601874312_enpTeqDxwnkuFibrbSnxpuuyN9KzYMWc.jpg'

function appendUL(element){
    unordered.appendChild(element)
}

appendUL(newElement)

function resize(image){
    image.style.height = '30px'
}

resize(images[1])

function classInvisible(element){
    element.className = 'invisible'
}

classInvisible(uglyWebby)

function newListItem(str){
    let newLI = document.createElement('li')
    newLI.innerText = str
    return newLI
}

let thisNewThing = newListItem('zip zop zoobity bop')

appendUL(thisNewThing)

function createNewHeader(headerSize, str){
    let newHeader = document.createElement('header')
    newHeader.innerText = str
    newHeader.style.fontSize = `${headerSize}px`
    return newHeader
}

let thisNewHeader = createNewHeader('300', 'I\'m going on a head')

appendUL(thisNewHeader)