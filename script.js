let image = document.querySelector('img')
let button = document.querySelector('button')
let form = document.querySelector('form')
let input = document.querySelector('input')
let h5 = document.querySelector('h5')
form.addEventListener('submit', qrGenerator)

async function qrGenerator(e){
    e.preventDefault()
    const res = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
    console.log(res.url);
    image.setAttribute('src', res.url)
}