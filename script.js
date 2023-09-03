function calc() {
    const amount = document.getElementById('amount').value;
    const interest = document.getElementById('interest').value;
    const sd = document.getElementById('SD').value;
    const sm = document.getElementById('SM').value;
    const sy = document.getElementById('SY').value;
    const ed = document.getElementById('ED').value;
    const em = document.getElementById('EM').value;
    const ey = document.getElementById('EY').value;
    // var days = document.getElementById('days').value;
    // var value = days;
    var days;
    var months = 0;
    var years = 0;
    var value;

    days = parseInt((30 - sd + 1)) + parseInt(ed);
    months = parseInt(12 - sm) + parseInt(em - 1);
    years = (ey - sy - 1);
    console.log(days);
    console.log(months);
    console.log(years);

    while (days >= 30) {
        days-=30;
        months++;
    }
    while(months>=12){
        months-=12;
        years++;
    }

    value = parseInt(years*360) + parseInt(months*30) + parseInt(days)
    console.log(value);

    // for(var i = 0; days >= 30; i++){
    //     days -= 30;
    // }

    // while (days >= 30) {
    //     if (days >= 360) {
    //         years++;
    //         days -= 360;
    //     }
    //     if (days >= 30) {
    //         months++;
    //         days -= 30;
    //     }
    // }



    var interestAmount = amount * ((interest / 100 / 360) * value)
    var finalAmount = parseFloat(amount) + parseFloat(interestAmount);
    var monthlyAmount = (parseFloat(finalAmount) / (parseFloat(value))) * 30;

    // var result = parseInt(amount) + ((parseInt(amount)/100)*parseInt(interest));
    // var ans = result / 12;

    document.getElementById('days').innerHTML = value;
    document.getElementById('counter').innerHTML = (Math.abs(years) + " Years " + Math.abs(months) + " Months " + Math.abs(days) + " Days");
    document.getElementById('IA').innerHTML += parseFloat(interestAmount).toFixed(3);
    document.getElementById('FA').innerHTML += parseFloat(finalAmount).toFixed(3);
    document.getElementById('MA').innerHTML += parseFloat(monthlyAmount).toFixed(3);
}