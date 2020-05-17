const runTimeDOM = document.getElementById('run-time');
const currentTimeDOM = document.getElementById('current-time');
const deployTimeDOM = document.getElementById('deploy-time');
const cacheTimeDOM = document.getElementById('cache-time');

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
    .then(() => {
      const cacheTime = +new Date(cacheTimeDOM.innerHTML)
      const deployTime = +new Date(deployTimeDOM.innerHTML)

      console.log(cacheTime, deployTime)
      if (cacheTime !== deployTime) {
        cacheTimeDOM.classList.add('red')
      }
    })
}

function init() {
  updateRunTime();
  updateCurrentTime();
  readDeployTime();
}

init();
