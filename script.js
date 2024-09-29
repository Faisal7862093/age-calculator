function calculation() {
    var setdate = new Date(document.getElementById("setdate").value);
    var todaydate = new Date();

    var years = todaydate.getFullYear - setdate.getFullYear;
    var months = todaydate.getMonth - setdate.getMonth;
    var days = todaydate.getDay - setdate.getDay;
     
    if (months < 0) {
        years--;
        months += 12;
    }
    if (days < 0) {
        months--;
        days += 31;
    }
    document.getElementById("years").textContent = years + "  " + "years";
}