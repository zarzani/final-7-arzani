let now = new Date();
let h3 = document.querySelector("h3");
let date = now.getDate();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[now.getMonth()]; 
h3.innerHTML = (day)+"&nbsp" +" "+ (hour)+ ":"+ (minutes)+"&nbsp"+" " +(month)+":"+ (date);




