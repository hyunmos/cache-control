const runTimeDOM = document.getElementById('run-time');
const currentTimeDOM = document.getElementById('current-time');
const deployTimeDOM = document.getElementById('deploy-time');

function updateCurrentTime() {
  currentTimeDOM.innerHTML = new Date().toISOString();
  setInterval(function () {
    currentTimeDOM.innerHTML = new Date().toISOString();
  }, 1000)
}

function updateRunTime() {
  runTimeDOM.innerHTML = new Date().toISOString();
}

function readDeployTime() {
  fetch('../deploy-time.txt')
    .then(response => response.text())
    .then(text => deployTimeDOM.innerHTML = text)
}

function init() {
  updateRunTime();
  updateCurrentTime();
  readDeployTime();
}

init();
