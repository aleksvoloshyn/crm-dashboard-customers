const pageNavItem = document.querySelectorAll('.page-navigation__item')

function menuItemsHandler() {
  const activeLink = document.querySelector('.isActive')
  const activeText = document.querySelector('.isActiveText')
  const curActiveText = this.querySelector('.page-navigation__text')
  activeLink.classList.remove('isActive')
  this.classList.add('isActive')
  activeText.classList.remove('isActiveText')
  curActiveText.classList.add('isActiveText')
}

pageNavItem.forEach((item) => {
  item.addEventListener('click', menuItemsHandler)
})
