const firstLoadPage = (renderPages) => {
  document.getElementById('content').innerHTML = `
  <div class="header h-32 py-2 bg-rose-600 flex flex-col items-center">
    <h1 class="flex-shrink-0 text-center text-4xl font-bold text-red-200 m-auto">Daging</h1>
    <nav id="navbar" class="flex flex-row gap-x-12 items-baseline">
      <button data-name="Home" class="button button-active">Home</button>
      <button data-name="Menu" class="button">Menu</button>
      <button data-name="About" class="button">About</button>
    </nav>
  </div>
  <div class="mt-6 container mx-auto">
    <div id="page" class="max-w-screen-md mx-auto">
    </div>
  </div>
  `

  const buttons = document.getElementById('navbar').children;
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (e) => {
      renderPages(e.target.textContent);
      changeActiveButton(e.target);
    })
  }
  
  const changeActiveButton = (targetButton) => {
    const activeButton = document.querySelector('.button-active');
    if(activeButton) {
      activeButton.classList.remove('button-active');
    }

    targetButton.classList.add('button-active');
  }
}

export default firstLoadPage;