import post from './module/post';

export default function Scores() {
  const refreshBtn = document.querySelector('.refreshBtn');
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  const Form = document.querySelector('form');

  const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2ehdutnghjd400irjf8nnv/scores/';

  const display = (data) => {
    const scoreList = document.querySelector('.scores-div');
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

  Form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };
    if (nameInput.value && scoreInput.value === '');
    post(api, data);
    Form.reset();
  });

  const Get = async (api) => {
    try {
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'content-Type': 'application/json',
        },
      });
      const data = await response.json();
      const finalResults = data.result;
      display(finalResults);
      return data;
    } catch (error) {
      return error;
    }
  };
  refreshBtn.addEventListener('click', (e) => {
    Get(api);
    e.stopPropagation();
  });
}
