
const container = document.querySelector('.container');

function createGrid(sqNum){
  for (let i = 0; i < sqNum * sqNum; i++) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${500/sqNum}px`;
    div.style.height = `${500/sqNum}px`;
    div.addEventListener('mouseover',(e) => {
      e.target.classList.add('hover');
    })
    container.appendChild(div);
  }
}

function removeAllChildNodes(parent){
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

createGrid(16);

const btn = document.querySelector('.btn');
btn.addEventListener('click',() => {
  let sqNum = prompt("number of squares per side",0);
  if (sqNum>100) {
    return;
  }
  removeAllChildNodes(container);
  createGrid(sqNum);
  
})


