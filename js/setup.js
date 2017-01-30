'use strict';

//open
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');

setupOpen.addEventListener('click', function(){
  setup.classList.remove('invisible');
});

//close
var setupClose = setup.querySelector('.setup-close');

setupClose.addEventListener('click', function(){
  setup.classList.add('invisible');
});

//wizardCoat
var wizardCoat = document.querySelector('#wizard-coat');
var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var colorCoatNumber =  Math.floor(Math.random()*wizardCoatColors.length);

wizardCoat.addEventListener ('click', function(){
  wizardCoat.style.fill = wizardCoatColors[colorCoatNumber];
});

//wizardEyes
var wizardHead = document.querySelector('#wizard-head');
var wizardEyes = document.querySelector('#wizard-eyes');
var wizardEyesColors = ['yellow', 'brown', 'black', 'green', 'blue'];
var colorEyesNumber =  Math.floor(Math.random()*wizardEyesColors.length);

wizardHead.addEventListener('click', function(){
  wizardEyes.style.fill = wizardEyesColors[colorEyesNumber];
});

//fireball
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');
var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var colorFireballNumber =  Math.floor(Math.random()*wizardFireballColors.length);

setupFireballWrap.addEventListener('click', function(){
  setupFireballWrap.style.background = wizardFireballColors[colorFireballNumber];
});

//user-name
var nameField = document.querySelector('.setup-user-name');
nameField.required = true;
nameField.maxlength = 5; //не действует.


