// Set the date we're counting down to
var countDownDate = new Date('Oct 24, 2021 10:00:00').getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById('day').innerHTML = days;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minutes;
  document.getElementById('second').innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'EXPIRED';
  }
}, 1000);

document.getElementById('mute-sound').style.display = 'none';
document.getElementById('mute-sound').addEventListener('click', function (event) {
  document.getElementById('mute-sound').style.display = 'none';
  document.getElementById('unmute-sound').style.display = 'inline-block';
  document.getElementById('song').pause();
});
document.getElementById('unmute-sound').addEventListener('click', function (event) {
  document.getElementById('unmute-sound').style.display = 'none';
  document.getElementById('mute-sound').style.display = 'inline-block';
  document.getElementById('song').play();
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbw8-ZnhumsJngUePSv1hi0Cf7hhVKME9xRzfD2YgfbeeCmFBcCPqGOJ80Uq2-KcYTh3/exec';
const form = document.forms['bukutamu'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //ketika submit
  //tampilkan loading hilangkan kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      //tampilkan kirim hilangkan loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      //tampilkan alert
      myAlert.classList.toggle('d-none');
      //reset form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});
