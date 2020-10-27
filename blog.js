const heading  = document.getElementById('heading')
const container = document.getElementById('post-container')
const createParagraph = document.getElementById('createParagraph')
const createSubheading = document.getElementById('createSubheading')
const createImage = document.getElementById('createImage')
const createConclusion = document.getElementById('createConclusion')
const done = document.getElementById('done')

function createElement(e){
    if(e.target.id == "createSubheading"){

        const subheading = document.createElement('h3')
        subheading.className = "subheading"
        subheading.contentEditable = "true"
        
        container.appendChild(subheading)

    }else if(e.target.id == "createParagraph"){

        const paragraph = document.createElement('p')
        paragraph.className = "paragraph"
  
        container.appendChild(paragraph)

    }else if(e.target.id == "createImage"){
      
        const image = document.createElement('input')
        image.className = "image"
        image.type = 'file'
        
        container.appendChild(image)
    }else if(e.target.id = "createConclusion"){

        const conclusion = document.createElement('p')
        conclusion.className = "conclusion"
        conclusion.contentEditable = "true"

        container.appendChild(conclusion)

    }
}


createParagraph.addEventListener('click', createElement)
createSubheading.addEventListener('click', createElement)
createImage.addEventListener('click', createElement)
createConclusion.addEventListener('click', createElement)


function send(){

    function something(stuff){
        stuff.data  = ''
        while(container.firstElementChild){
            
            stuff.data += container.firstElementChild.outerHTML
            container.removeChild(container.firstElementChild)
        }      
        return stuff
    }

    const stuff = {}
    console.log(JSON.stringify(something(stuff)))
    
}



done.addEventListener('click', send)
// container.childNodes.addEventListener('click',  something )

// e.target.addEventListener('input', function(){
//     if(e.target.textContent.trim() == ''){
//         e.target.style.borderBottom = "2px solid gray"
//     }
//     else if(e.target.textContent.trim() !== ''){
//         e.target.style.borderBottom = '2px solid white'
//     }else{
//         console.log('weird')
//     }
// })