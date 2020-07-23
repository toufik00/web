const lis = [...document.querySelectorAll('.this-list li')];

for (const li of lis) {
  li.addEventListener('click', function() {
    this.parentNode.removeChild(this);
  })
}