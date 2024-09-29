function calculation() {
    var setdate = new Date(document.getElementById("setdate").value);
    var today = new Date();

    var ageYears = today.getFullYear() - setdate.getFullYear();
    var ageMonths = today.getMonth() - setdate.getMonth();
    var ageDays = today.getDate() - setdate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += 31;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("years").textContent = ageYears + "  " + "years";
    document.getElementById("months").textContent = ageMonths + "  " + "Months";
    document.getElementById("days").textContent = ageDays + "  " + "Days";
}