import post from './module/post';
import Get from './module/Get';

const Scores = () => {
  const refreshBtn = document.querySelector('.refreshBtn');
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  const Form = document.querySelector('form');

  const api = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/2ehdutnghjd400irjf8nnv/scores/';

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

  refreshBtn.addEventListener('click', () => {
    Get(api);
    console.log(Get(api))
  });
}

export default Scores;
