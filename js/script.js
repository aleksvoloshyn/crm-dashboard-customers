const pageNavItem = document.querySelectorAll('.page-navigation__item')
const mainTitle = document.querySelector('.page-board__main-title')
const activeTitle = document.querySelector('.page-board__active-title')
const inActive = document.querySelectorAll('.page-board__tablecell--inactive')
const pageBoardItem = document.querySelectorAll('.page-board__item')

function menuItemsHandler() {
  const activeLink = document.querySelector('.isActive')
  const activeText = document.querySelector('.isActiveText')
  const curActiveText = this.querySelector('.page-navigation__text')
  activeLink.classList.remove('isActive')
  this.classList.add('isActive')
  activeText.classList.remove('isActiveText')
  curActiveText.classList.add('isActiveText')
}

function activeCustomersHandler() {
  inActive.forEach((i) => i.parentNode.classList.add('isHidden'))
}
function allCustomersHandler() {
  inActive.forEach((i) => i.parentNode.classList.remove('isHidden'))
}

pageNavItem.forEach((item) => {
  item.addEventListener('click', menuItemsHandler)
})

activeTitle.addEventListener('click', activeCustomersHandler)
mainTitle.addEventListener('click', allCustomersHandler)

pageBoardItem.forEach((item) => {
  item.addEventListener('click', function () {
    const activePage = document.querySelector('.active-page')

    if (
      this.innerText !== '<' &&
      (this.innerText !== '...') & (this.innerText !== '>')
    ) {
      activePage.classList.remove('active-page')
      this.classList.add('active-page')
    }
  })
})
