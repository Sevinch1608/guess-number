document.querySelector('.english').addEventListener('click',  () => {
  document.querySelector('.again').textContent = 'Again!';
  document.querySelector('.between').textContent = '(Between 1 and 20)';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').textContent = 'Check!';
  document.querySelector('.label-score').textContent = ' 💯 Score:   20';
  document.querySelector('.label-highscore').textContent = ' 🥇 Highscore:  0';
});

document.querySelector('.uzbek').addEventListener('click', () => {
  document.querySelector('.again').textContent = 'Qayta!';
  document.querySelector('.between').textContent = '(1 dan 20 gacha)';
  document.querySelector('h1').textContent = "O'ylangan sonni top!";
  document.querySelector('.message').textContent = 'Topishni boshlang...';
  document.querySelector('.check').textContent = 'Tekshir!';
  document.querySelector('.label-score').innerHTML = `💯 Ball:<span class="score">20</span>`;
  document.querySelector('.label-highscore').innerHTML = `🥇 Yuqori ball:<span class="highscore">0</span>`;
});

let computerNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let language = 'eng';
let engToUzb = {
  '⛔ No number!': '⛔ Raqam kiritilmadi!',
  '📈 Too High!': '📈 Katta son!',
  '📉 Too Low!': '📉 Kichik son!',
  '✅ Corret NUmber!': "✅ To'g'ri raqam!",
  '❌ You lost the game!': "❌ O'yinda yutqazdingiz!",
  'Strart guessing...': 'Topishni boshlang...',
};
function showMessage(message) {
  if (language == 'uzb') {
    document.querySelector('.message').textContent = engToUzb[message];
  } else {
    document.querySelector('.message').textContent = message;
  }
}
const NUMBER = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', () => {
  let guessNumber = Number(document.querySelector('.guess').value);

  if (score > 1) {
    if (!guessNumber) {
      showMessage('⛔ No number!');
    } else if (guessNumber !== computerNumber) {
      showMessage((guessNumber > computerNumber) ? '📈 Too High!' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      if(guessNumber>highScore) highScore=guessNumber
      showMessage('✅ Correct Number!');
      NUMBER.textContent = computerNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      NUMBER.style.width = '25rem';
      highScore = ((score > highScore) ? score : highScore);
      document.querySelector('.label-highscore').innerHTML = `🥇 Highscore: <span class="highscore">${highScore}</span>`;
    }
  } else {
    showMessage('❌ You lost the game!');
    document.querySelector('.score').textContent = 0;
  }
});
document.querySelector('.again').addEventListener('click', function () {
  computerNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  NUMBER.textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  NUMBER.style.width = '15rem';
});



