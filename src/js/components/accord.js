const accordion = document.querySelector('.accord')

if(accordion) {
  const items = accordion.querySelectorAll('.accord__item')

  items.forEach(el => {
    el.querySelector('.accord__header').addEventListener('click', (e) => {
      e.preventDefault()

      const currentDesc = el.querySelector('.accord__desc')
      el.classList.toggle('active')
      el.classList.contains('active')
        ? currentDesc.style.maxHeight = currentDesc.scrollHeight + 'px'
        : currentDesc.style.maxHeight = null
    })
  })
}
