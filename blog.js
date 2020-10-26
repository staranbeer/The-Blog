const url = "";

const blogContainer = document.getElementById('post-container')

const subheadingButton = document.getElementById('createSubheading')
const paragraphButton = document.getElementById('createParagraph')
const imageButton = document.getElementById('createImage')
const conclusionButton = document.getElementById('createConclusion')
const done = document.getElementById('done')

var conclusionCounter = 0;
var imageCounter = 0
var subheadingCounter = 0;
var paragraphCounter = 0;

subheadingButton.addEventListener('click', ()=>{
    const input = document.createElement('input')
    input.className = "subheading"
    input.name = "Subheading" + subheadingCounter
    input.placeholder = "Sub heading"
    subheadingCounter++
    blogContainer.appendChild(input)
})



paragraphButton.addEventListener('click', ()=>{
    const input = document.createElement('textarea')
    input.className = "paragraph"
    input.placeholder = "Paragraph"
    input.name = "paragraph" + paragraphCounter
    paragraphCounter++
    blogContainer.appendChild(input)
})


imageButton.addEventListener('click', ()=>{
    const input = document.createElement('input')
    input.type = "file"
    input.className = "image"
    input.name = "image" + imageCounter
    imageCounter++
    blogContainer.appendChild(input)
})

conclusionButton.addEventListener('click', ()=>{
    const input = document.createElement('textarea')
    input.className = "main-summary"
    input.placeholder = "Conclusion"
    input.name = "conclusion" + conclusionCounter
    conclusionCounter++
    blogContainer.appendChild(input)
})



done.addEventListener('click', ()=>{
   
       let form = new FormData(blogContainer)
       for(var pair of form.entries()) {
        console.log(pair); 
     }
     
        fetch( url,{
            method: 'POST',
            body: form
        } )
    });
