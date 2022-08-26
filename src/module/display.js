const display = (data) => {
  const scoreList = document.querySelector('.scores-div');
  scoreList.innerHTML = '';
  data.forEach((person) => {
    const list = document.createElement('li');
    list.classList.add('list');
    list.innerHTML = `
        <div class="one">
        <p>${person.user}: ${person.score}</p>
        </div>
       `;
    scoreList.appendChild(list);
  });
};

export default display;