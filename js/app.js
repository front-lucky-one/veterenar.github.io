"use strict";

var burger = document.querySelector('.checkbox1'),
    navBar = document.querySelector('.nav_header'),
    faqWrapp = document.querySelectorAll('.wrapp-faq'),
    colectionAnswer = document.querySelectorAll('.faq-answer'),
    colectionQuestion = document.querySelectorAll('.faq-question');
burger.addEventListener('click', function (e) {
  e.stopPropagation();
  navBar.classList.toggle('nav-active');
});
faqWrapp.forEach(function (element) {
  var faqBtn = element.querySelector('.faq-question');
  var faqAnswer = element.querySelector('.faq-answer');
  console.log(element);
  element.addEventListener('click', function (e) {
    removeClass();
    addClass(faqAnswer, faqBtn);
  });
});

function removeClass() {
  colectionAnswer.forEach(function (e) {
    return e.classList.remove('faq-active');
  });
  colectionQuestion.forEach(function (e) {
    return e.classList.remove('add');
  });
}

function addClass(element, xe) {
  element.classList.add('faq-active');
  xe.classList.add('add');
}