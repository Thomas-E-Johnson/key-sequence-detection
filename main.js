const pressed = [];
const secretCode = 'tom'

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join('').includes(secretCode)) {
    console.log('Secret Unlocked!');
    cornify_add();
  }
  console.log(pressed);
})
