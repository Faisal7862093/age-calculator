function calculation() {
    var setdate = new Date(document.getElementById("setdate").value);
    var todaydate = new Date();

    var years = todaydate.getFullYear - setdate.getFullYear;
    var months = todaydate.getMonth - setdate.getMonth;
    var days = todaydate.getDay - setdate.getDay;
    
}