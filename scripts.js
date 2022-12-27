const fortunes = [
  {
    text: 'One that would have the fruit must climb the tree.',
  },
  {
    text: 'He who throws mud loses ground.',
  },
  {
    text: 'Never forget that a half truth is a whole lie.',
  },
  {
    text: 'Disbelief destroys the magic.',
  },
  {
    text: 'Do the thing you fear and the death of fear is certain.',
  },
  {
    text: 'Good to begin well, better to end well.',
  },
  {
    text: 'Big journeys begin with a single step.',
  },
  {
    text: 'The usefulness of a cup is in its emptiness.',
  },
  {
    text: 'Your road to glory will be rocky, but fulfilling.',
  },
  {
    text: 'The best prediction of future is the past.',
  },
  {
    text: 'What’s hidden in an empty box?',
  },
  {
    text: 'You can see a lot just by looking.',
  },
  {
    text: 'A stranger is a friend you have not spoken to yet.',
  },
  {
    text: 'Do not fear what you do not know.',
  },
  {
    text: 'The object of your desire comes closer.',
  },
  {
    text: 'If you wish to know the mind of a man, listen to his words.',
  },
];

const image_f = document.querySelector('.image')
const text_f = document.querySelector('.fortune-text')
const btn_f = document.querySelector('.button')

btn_f.addEventListener('click', getFortune)

function getFortune() {
  const randomNum = Math.floor(Math.random() * fortunes.length);
  
  if (btn_f.innerHTML === "Open Cookie!") {
    btn_f.innerHTML = "Click to get a new cookie!";
    image_f.src = `cookie2.png`
    text_f.innerHTML = fortunes[randomNum].text;
  } else {
    btn_f.innerHTML = "Open Cookie!";
    image_f.src = `cookie1.png`;
    text_f.innerHTML = ''
  }
}

