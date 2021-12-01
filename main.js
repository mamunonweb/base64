import './style.css'

base64Text.oninput = handleBase64

utf8Text.oninput = handleUtf8

base64Copy.onclick = function () {
  navigator.clipboard.writeText(base64Text.value)
}

utf8Copy.onclick = function () {
  navigator.clipboard.writeText(utf8Text.value)
}

base64Past.onclick = function () {
  navigator.clipboard.writeText(base64Text.value)
}

base64Past.onclick = async function () {
  const text = await navigator.clipboard.readText()
  base64Text.value = text
  handleBase64()
}

utf8Past.onclick = async function () {
  const text = await navigator.clipboard.readText()
  utf8Text.value = text
  handleUtf8()
}

function show(element, display = 'block') {
  element.classList.add(display)
  element.classList.remove('hidden')
}

function hide(element, display = 'block') {
  element.classList.remove(display)
  element.classList.add('hidden')
}

function handleBase64() {
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

function handleUtf8() {
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
