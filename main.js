import './style.css'

base64Text.oninput = function () {
  hide(utf8Error, 'inline-block')
  hide(base64Error, 'inline-block')
  try {
    utf8Text.value = atob(base64Text.value)
  } catch ({ name }) {
    utf8Text.value = ''
    utf8Error.textContent = name
    show(utf8Error, 'inline-block')
  }
}

utf8Text.oninput = function () {
  hide(base64Error, 'inline-block')
  hide(utf8Error, 'inline-block')
  try {
    base64Text.value = btoa(utf8Text.value)
  } catch ({ name }) {
    base64Text.value = ''
    base64Error.textContent = name
    show(base64Error, 'inline-block')
  }
}

base64Copy.onclick = function () {
  navigator.clipboard.writeText(base64Text.value)
}

utf8Copy.onclick = function () {
  navigator.clipboard.writeText(utf8Text.value)
}

function show(element, display = 'block') {
  element.classList.add(display)
  element.classList.remove('hidden')
}

function hide(element, display = 'block') {
  element.classList.remove(display)
  element.classList.add('hidden')
}
