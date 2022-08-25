export default function Scores() {
  const submitButton = document.querySelector('.submitBtn');
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');

  const addToList = () => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    const objectScores = {
      name: nameInput.value,
      score: scoreInput.value,
    };
    scores.push(objectScores);
    localStorage.setItem('scores', JSON.stringify(scores));
    window.location.reload();
  };

  const display = () => {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.forEach((score) => {
      const scoreList = document.querySelector('.scores-div');
      const list = document.createElement('li');
      list.classList.add('list');
      list.innerHTML = `
        <div class="one">
        <p>${score.name}: ${score.score}</p>
        </div>
       `;
      scoreList.appendChild(list);
    });
  };
  display();
  submitButton.addEventListener('click', () => {
    if (nameInput.value && scoreInput.value === '') return;
    addToList(nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  });
}