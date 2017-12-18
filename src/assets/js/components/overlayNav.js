const overlayNav = () => {
  document.addEventListener('DOMContentLoaded', function(){
    let checkbox = document.querySelector('#nav-toggle');
    let checkboxLabel = document.querySelector('#nav-toggle-label');

    function removeActive(){
      checkboxLabel.classList.remove('nav-toggle-label--active');
    }

    checkbox.onclick = function(){
      if (checkbox.checked){
        checkboxLabel.classList.add('nav-toggle-label--active');
      } else{
        removeActive();
      }
    };

    let overlayMenu = document.querySelector('.overlay-menu');
    overlayMenu.onclick = function(){
      removeActive();
      checkbox.checked = false;
    };

  });
}

export default overlayNav
