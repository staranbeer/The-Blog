const subHeading = document.getElementById('createSubHeading')
const container = document.getElementById('post-container')

const post = []

const title = document.getElementById('main-heading')
const heading = document.getElementById('main-summary')


subHeading.addEventListener('click', (i)=>{
    const heading = document.createElement('input')
    heading.className = 'subheading'
    heading.placeholder = "Subheading"
    container.appendChild(heading)

})

const paragraph = document.getElementById('paragraph')

paragraph.addEventListener('click', ()=>{
    const paragraph = document.createElement('textarea')
    paragraph.id = 'main-summary'
    container.appendChild(paragraph)
})

