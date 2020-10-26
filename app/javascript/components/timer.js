const initTimer = () => {
  const releaseDate = 'Nov 20, 2020 16:00:00';
  
  const timer = document.querySelector('#timer');

  const rootPath = '/';
  const homePath = '/home';
  
  const repeat = setInterval(function () {
    releaseCounter();
  }, 1000);
        
  const releaseCounter = () => {
    const countDate = new Date(releaseDate).getTime();
    const now = new Date().getTime();
    const delta = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    let d = Math.floor(delta / day);
    let h = Math.floor((delta % day) / hour);
    let m = Math.floor((delta % hour) / minute);
    let s = Math.floor((delta % minute) / second);
    
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    
    if (window.location.pathname === rootPath || window.location.pathname === homePath) {
      
      if (Math.floor(delta/1000) === 0) {
        document.querySelector('#d').innerText =  "00";
        document.querySelector('#h').innerText =  "00";
        document.querySelector('#m').innerText =  "00";
        document.querySelector('#s').innerText =  "00";
        clearInterval(repeat);
      } else {
        document.querySelector('#d').innerText = d;
        document.querySelector('#h').innerText = h;
        document.querySelector('#m').innerText = m;
        document.querySelector('#s').innerText = s;
        // timer.innerHTML = `${d} : ${h} : ${m} : ${s}`;  
      }
      
    }

  }
}

export { initTimer };