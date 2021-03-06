const characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];

let passwordOneEl = document.getElementById('passwordone-el');
let passwordTwoEl = document.getElementById('passwordtwo-el');
let generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', generatePasswords);

function generatePasswords() {
  passwordOne();
  passwordTwo();
}

function passwordOne() {
  let randomPasswordOne = '';
  for (i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    randomPasswordOne += characters[random];
  }
  passwordOneEl.textContent = randomPasswordOne;
}

function passwordTwo() {
  let randomPasswordTwo = '';
  for (i = 0; i < 15; i++) {
    let random = Math.floor(Math.random() * characters.length);
    randomPasswordTwo += characters[random];
  }
  passwordTwoEl.textContent = randomPasswordTwo;
}

// Working on copy to clipboard function

// function copyToClipboard() {
//   passwordOneEl.ariaSelected();
//   passwordOneEl.setSelectionRange(0, 99999);
//   navigator.clipboard.writeText(passwordOneEl.value);
//   alert('Copied');
// }

// copyToClipboard();
