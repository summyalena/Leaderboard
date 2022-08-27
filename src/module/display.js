const display = (data) => {
  const scoreList = document.querySelector('.scores-div');
  scoreList.innerHTML = '';
  data.forEach((person) => {
    const list = document.createElement('li');
    list.classList.add('list');
    list.innerHTML = `
        <div class="list-one">
        <i class="fa-solid fa-user"></i>
        <div>${person.user}: ${person.score}</div>
        </div>
       `;
    scoreList.appendChild(list);
  });
};

export default display;