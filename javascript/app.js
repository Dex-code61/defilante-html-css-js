
const prods = document.querySelectorAll('.prod')
const prod = document.querySelector('.rse')
const ob = new IntersectionObserver((entries) => {
    for(let entry of entries) {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible')
        }
        else {entry.target.classList.remove('visible')}
    }
}, {
    threshold: .3
})

// ob.observe(prod)

for(let prod of prods) {
    ob.observe(prod)
}