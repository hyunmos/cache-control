const cacheTypeDOM = document.getElementById('type');
const buildTimeDOM = document.getElementById('build-time');
const runTimeDOM = document.getElementById('run-time');
const currentTimeDOM = document.getElementById('current-time');

function updateCurrentTime() {
  setInterval(function () {
    currentTimeDOM.innerHTML = new Date().toString();
  }, 1000)
}

function updateRunTime() {
  runTimeDOM.innerHTML = new Date().toString();
}

function updateBuildTime() {
  buildTimeDOM.innerHTML =
}


function init() {
  updateRunTime();
  updateCurrentTime();
}

init();
