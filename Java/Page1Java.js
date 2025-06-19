const sections = [...document.querySelectorAll('section')]

let options = {
    threshold: 1
}

const handleIntersect = (entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target.dataset)
            document.body.style.background = entry.target.dataset.color;
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)


sections.forEach(section => {
    observer.observe(section)
})