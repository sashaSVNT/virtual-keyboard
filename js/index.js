const keyboard = document.createElement('div');
const textarea = document.createElement('textarea');
keyboard.classList.add('keyboard');
textarea.classList.add('textarea');
document.body.append(textarea, keyboard);

textarea.addEventListener("keydown", e => {
  e.preventDefault();
});

textarea.addEventListener("keyup", e => {
  e.preventDefault();
});

const charCodes = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

const keysEnLayout = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];

function createKeyboard() {
  for (let i = 0; i < keysEnLayout.length; i++) {
    const keysRowElement = document.createElement('div');
    keysRowElement.classList.add('keyboard-row');
    keyboard.append(keysRowElement);
    let row = keysEnLayout[i];
    for (let j = 0; j < row.length; j++) {
      let key = row[j];
      const keyElement = document.createElement('button');
      keyElement.classList.add('btn');
      keyElement.textContent = key;
      keysRowElement.append(keyElement);
      keyElement.setAttribute('data-code', charCodes[i][j]);
    }
  }
}

function handleKeyPress(key, textarea) {
  switch (key) {
    case 'Backspace':
      let cursorStartPosition = textarea.selectionStart;
      let cursorEndPosition = textarea.selectionEnd;
      if (cursorStartPosition === cursorEndPosition) {
        let textBeforeCursor = textarea.value.substring(0, cursorStartPosition - 1);
        let textAfterCursor = textarea.value.substring(cursorEndPosition);
        textarea.value = textBeforeCursor + textAfterCursor;
        textarea.selectionStart = cursorStartPosition - 1;
        textarea.selectionEnd = cursorStartPosition - 1;
      }
      else if (cursorStartPosition !== cursorEndPosition) {
        let textBeforeCursor = textarea.value.substring(0, cursorStartPosition);
        let textAfterCursor = textarea.value.substring(cursorEndPosition);
        textarea.value = textBeforeCursor + textAfterCursor;
        textarea.selectionStart = cursorStartPosition;
        textarea.selectionEnd = cursorStartPosition;
      }
      break;
    case 'CapsLock':
      // toggleCapsLock(textarea);
      break;
    case 'Enter':
      textarea.value += '\n';
      break;
    case 'Shift':
      // toggleShift(textarea);
      break;
    case 'Tab':
      textarea.value += '\t';
      break;
    default:
      textarea.value += key;
  }
}

document.addEventListener('keydown', e => {
  const { key, code } = e;
  const keyElement = document.querySelector(`button[data-code="${code}"]`);
  console.log(code);
  if (keyElement && key === keyElement.textContent) {
    keyElement.classList.add('active');
    handleKeyPress(key, textarea);
  }
});

document.addEventListener('keyup', e => {
  const { key, code } = e;
  const keyElement = document.querySelector(`button[data-code="${code}"]`);
  if (keyElement && key === keyElement.textContent) {
    keyElement.classList.remove('active');
  }
});

createKeyboard();