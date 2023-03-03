let name_info = prompt("Lütfen isminizi giriniz: ");
document.getElementById("myName").innerHTML = name_info;
let my_clock = document.getElementById('myClock');

function show_time() {
    let date = new Date();
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    my_clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getDay()]}`
}
setInterval(show_time,1000);