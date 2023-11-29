function srce() {
  let srce = document.getElementById('srce');
  alert('Volim i ja tebe');
}

function uzvicnikMici() {
  let proba = document.getElementById('proba');
  proba.style.backgroundImage = 'url("IMG/Mici.png")';
  proba.style.backgroundRepeat = 'no-repeat';
  proba.style.backgroundSize = 'cover';

  setTimeout(function () {
    proba.style.backgroundImage = 'none';
  }, 1000);
}
