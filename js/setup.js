'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupOverlay = document.querySelector('.overlay');
var setupSubmit = document.querySelector('.setup-submit');

var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = ['yellow', 'brown', 'black', 'green', 'blue'];

var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxLength = 5;

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

// wizardCoat
wizardCoat.addEventListener('click', function () {
  var colorCoatNumber = Math.floor(Math.random() * wizardCoatColors.length);
  wizardCoat.style.fill = wizardCoatColors[colorCoatNumber];
});

// wizardEyes
wizardEyes.addEventListener('click', function () {
  var colorEyesNumber = Math.floor(Math.random() * wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[colorEyesNumber];
});

// fireball
setupFireballWrap.addEventListener('click', function () {
  var colorFireballNumber = Math.floor(Math.random() * wizardFireballColors.length);
  setupFireballWrap.style.background = wizardFireballColors[colorFireballNumber];
});


// show/hide
var checkThePressedKeyEnter = function (evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
};

var setupEscHandler = function (evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setupOverlay.classList.add('invisible');
  }
};

var showSetupOverlay = function () {
  setupOverlay.classList.remove('invisible');
  document.addEventListener('keydown', setupEscHandler);
};

var hideSetupOverlay = function () {
  setupOverlay.classList.add('invisible');
  document.removeEventListener('keydown', setupEscHandler);
};


// open
setupOpen.addEventListener('click', function () {
  showSetupOverlay();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (checkThePressedKeyEnter(evt)) {
    showSetupOverlay();
  }
});


// close
setupClose.addEventListener('click', function () {
  hideSetupOverlay();
});

setupClose.addEventListener('keydown', function (evt) {
  if (checkThePressedKeyEnter(evt)) {
    hideSetupOverlay();
  }
});

setupSubmit.addEventListener('click', function () {
  hideSetupOverlay();
});

setupSubmit.addEventListener('keydown', function (evt) {
  if (checkThePressedKeyEnter(evt)) {
    hideSetupOverlay();
  }
});
