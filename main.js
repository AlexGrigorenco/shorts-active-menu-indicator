


//  RENDER MENU

const menuListArray = [
  {
    name: 'Home',
    color: '#FFFFFF',
  },
  {
    name: 'About',
    color: '#4000FF',
  },
  {
    name: 'Portfolio',
    color: '#FF0040',
  },
  {
    name: 'Blog',
    color: '#F7FE2E',
  },
  {
    name: 'Contacts',
    color: '#00FF00',
  },
]

const htmlString = menuListArray.map(elem => {
  return `<li data-active-color="${elem.color}" class="menu-item ">
  <a href="#" class="menu-link">${elem.name}</a>
</li>`
}).join('')

console.log(htmlString)

document.querySelector('.menu__list').innerHTML = htmlString



//===================================


window.addEventListener('load', windowLoad);

function windowLoad() {
  document.documentElement.classList.add('loaded')
  
  const menu = document.querySelector('.menu')

  const menuList = menu.querySelectorAll('.menu-item ')

  const menuActiveElem = menu.querySelector('.menu__active span')

  const menuLinks = menu.querySelectorAll('.menu-link ')

  console.log(menuLinks)

  

  menuList.forEach((element, i) => {
    if(i === 0){
      element.classList.add('active')
    }

    let menuItemActive = menu.querySelector('.menu-item.active')
    setMenuActive(menuItemActive)

    element.addEventListener('click', (e) =>{
      resetMenyItemList()

      menuItemActive = e.target.closest('.menu-item')

      menuItemActive.classList.add('active')
      
      setMenuActive(menuItemActive)
      
    })
  })

  
  

  function resetMenyItemList(){
    menuList.forEach(el => el.classList.remove('active'))
  }
  

  function setMenuActive(menuParentItem){
    menuActiveElem.style.cssText = `
    height: ${menuParentItem.offsetHeight}px;  
    top: ${menuParentItem.offsetTop}px;
    background: ${menuParentItem.dataset.activeColor};
    `
  }

}



