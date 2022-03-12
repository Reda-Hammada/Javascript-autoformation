'use strict';

const request = new XMLHttpRequest();
let data;
request.open('GET','https://restcountries.com/v3.1/name/Peru');
request.send();


request.addEventListener('load', function(){


  data = this.responseText;
  JSON.parse(data);
  console.log(data);

 





});
