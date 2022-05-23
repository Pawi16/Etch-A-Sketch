
const container = document.querySelector('.container');


for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('grid');
  div.addEventListener('mouseover',(e) => {
    e.target.classList.add('hover');
  })
  container.appendChild(div);
}

function createGrid(){
  
  for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.addEventListener('mouseover',(e) => {
      e.target.classList.add('hover');
    })
    container.appendChild(div);
  }
}
