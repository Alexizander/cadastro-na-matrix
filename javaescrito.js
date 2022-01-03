function updateDate(){
n =  new Date();
y = n.getFullYear() - 30;
m = n.getMonth() + 1;
d = n.getDate();
h = n.getHours();
m = n.getMinutes();
s = n.getSeconds();



document.getElementById("date").innerHTML = m + "/" + d + "/" + y + " às " + (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + "." + s;
}

setInterval(updateDate, 50);