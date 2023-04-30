function createKeyboard() {
  const keyboard = document.createElement('div');
  const textarea = document.createElement('textarea');
  keyboard.classList.add('keyboard');
  textarea.classList.add('textarea');
  document.body.append(textarea, keyboard);

  const keysEnLayout = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
  ];

  keysEnLayout.forEach(keysRow => {
    const keysRowElement = document.createElement('div');
    keysRowElement.classList.add('keyboard-row');
    keyboard.appendChild(keysRowElement);

    keysRow.forEach(key => {
      const keyElement = document.createElement('button');
      keyElement.classList.add('btn');
      if (key === ' ') {
        keyElement.classList.add('space');
      } else if (key === 'CapsLock' || key === 'Shift' || key === 'Backspace') {
        keyElement.classList.add('big-modifier');
      }
      keyElement.textContent = key;
      keysRowElement.appendChild(keyElement);
    });
  });
}

createKeyboard();