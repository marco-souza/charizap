const serviceMap = {
  wpp: "https://web.whatsapp.com",
  notion: "https://www.notion.so",
  discord: "https://discordapp.com/activity",
};

window.onload = () => {
  document.getElementById('wpp').onclick = () => {
    setView('wpp')
  }
  document.getElementById('discord').onclick =() => {
    setView('discord')
  }
  document.getElementById('notion').onclick =() => {
    setView('notion')
  }
}

function setView(service) {
  // set view
  document.querySelector('#view > iframe').setAttribute('src', serviceMap[service])
  // Remove selected
  Array.from(document.getElementsByClassName('selected')).map(el => el.setAttribute('class', ''))
  // set selected tool
  document.getElementById(service).setAttribute('class', 'selected')
}