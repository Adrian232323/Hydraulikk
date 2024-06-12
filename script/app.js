const hiddenElement = document.querySelectorAll('.hidden-d')
const observer = new  IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-d')
        }
        else{
            entry.target.classList.remove('show-d')
        }
    })
})
hiddenElement.forEach((el) => observer.observe(el))

