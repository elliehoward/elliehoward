var gameboyTxt = document.getElementsByClassName('skills')[0];
var dpad = document.getElementById('d-pad');
var buttons = document.getElementById('buttons');
var powerBtn = document.getElementById('powerbtn');
var fuzzyscreen = document.getElementsByClassName('fuzzy')[0];
var idx = 0

function cycle(){
  gameboyTxt.style.fontSize = '18px'
  gameboyTxt.innerHTML = skills[idx];
  idx++;
  if (idx === skills.length) {
    idx = 0
  }
}

function power () {
  if (fuzzyscreen.classList.contains('none')) {
    fuzzyscreen.classList.remove('none');
  } else {
    fuzzyscreen.classList.add('none');
  }
}

var skills = ['JavaScript <br> 5/5', 'HTML <br> 5/5', 'CSS <br> 5/5', 'Express <br> 5/5', 'Node <br> 4/5', 'REST APIs <br> 4/5', 'SQL <br> 3/5', 'Python <br> 3/5', 'ReactJS <br> 3/5']
dpad.addEventListener('click', cycle)
buttons.addEventListener('click', cycle)
powerBtn.addEventListener('click', power)
