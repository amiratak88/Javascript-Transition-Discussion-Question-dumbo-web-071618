// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

const button = document.getElementById('save_lincoln')

const img = document.getElementById('foreground')

function saveLincoln() {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
// $('#foreground').fadeOut(interval);

  let interval = parseInt(document.getElementById('interval').value)
  

  if (isNaN(interval)) {
    interval = 100
  }

    var fadeEffect = setInterval(function () {
        if (!img.style.opacity) {
            img.style.opacity = 1;
        }
        if (img.style.opacity > 0) {
            img.style.opacity -= 0.001;
        } else {
            clearInterval(fadeEffect);
        }
    }, interval / 1000);


}

button.addEventListener("click", saveLincoln)