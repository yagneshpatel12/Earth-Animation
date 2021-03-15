const circle1 = document.getElementById('circle1')
const circle2 = document.getElementById('circle2')
const firstpage = document.getElementsByClassName('firstpage')[0];
const percentage_text = document.getElementById('percentage_text')
const firstimg = document.getElementById('firstimg')
const secondimg = document.getElementById('secondimg')
const thirdimg = document.getElementById('thirdimg')
let j = 0;
let per;
let i = 0;
// this is the 360* circle
function circle() {
  for (i; i <= 100; i++) {
    per = (631 - (631 * i) / 100);
    circle2.style.strokeDashoffset = per;
  }
}
// right side text 1 t0 100
function perx() {
  if (percentage_text.innerText == 100) {
    percentage_text.innerText = 100;
    clearInterval(my);
  }
  else {
    percentage_text.innerText = j;
    console.log(percentage_text.innerText)

    j++;
    console.log(percentage_text.innerText)
  }
}

// calling the circle
circle();
// every 19 millisecond number will be increment
let my = setInterval(perx, 19);

// ripple effect
setTimeout(() => {
  firstpage.classList.add('ripple1');
  setTimeout(() => {
    change()
    firstpage.classList.remove('ripple', 'ripple1');
  }, 800);
}, 2000);

// changing the innerhtml of first page

function change() {
  firstpage.innerHTML = `  <div id="earth" class='ripple1'></div>
    <div id=bigtext>LARGEST<br>AUDIENCE.<br>HIGHEST<br>ENGAGEMENT.</div>
    <div id="smalltxt">I T P |</div>
    <i class="fa fa-search" id='search' aria-hidden="true"></i>
    <div id="list">
        <ul>
            <li>About</li>
            <li>contact</li>
            <li>Advertizing</li>
            <li>services</li>
        </ul>
    </div>
    <div id="menuicon">
        <p class="border"></p>
        <p class="border"></p>
        <p class="border"></p>
    </div>
    <div id="rtxt">001</div>
    <div id="line"><p id="line1"></p><p id="line2"></p></div>
    <div id="arrow">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
    </div>
    <a href='#secondpage'>
    <p>
   <i id="down" class="fa fa-chevron-down" aria-hidden="true"></i>
   </p>
   </a>
    <div id="rrtext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nisi?</div>
    <div id='bluebut'>--Changing world</div>`
    const down = document.getElementById('down')
    down.addEventListener('click', () => {
      console.log('hii');
      firstimg.style.animation = `img1 2s`;
      secondimg.style.animation = `img2 2s`;
      thirdimg.style.animation = `img3 2s`;
    })

  }  
