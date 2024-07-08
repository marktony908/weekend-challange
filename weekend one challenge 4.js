let nhif;
//function to deduct nhif
function nhifdeductionst(pay) {
    if(pay <= 5999) {
        nhif = 150;
    }else if (pay >= 6000 && pay <= 7999) {
        nhif = 300
    }else if ( pay >= 8000 && pay <= 11999) {
        nhif = 400
    }else if (pay >= 12000 && pay <= 14999) {
        nhif = 500
    }else if (pay >= 15000 && pay < 19999 ) {
        nhif =600
    }else if (pay >= 20000 && pay <= 24999) {
        nhif =750
    }else if (pay>= 25000 && pay <=29999) {
        nhif = 850
    }else if (pay >= 30000 && pay <=34999) {
        nhif = 900
    }else if (pay >= 35000 && pay <= 39999) {
        nhif =950
    }else if (pay >= 40000 && pay <=44999) {
        nhif = 1000
    }else if (pay >= 45000 && pay <=49999) {
        nhif = 1100
    }else if (pay >= 50000 && pay <=59999) {
        nhif = 1200
    }else if (pay >= 60000 && pay <=69999) {
        nhif = 1300
    }else if (pay >= 7000 && pay <=79999) {
        nhif =1400
    }else if (pay >= 8000 && pay <=89999) {
        nhif = 1500
    }else if (pay >= 9000 && pay <=99999) {
        nhif = 1600
    }else {
        nhif = 1700
    }
    return nhif;
}
let basicSalary;
//function to calculate an individual's PAYE
functionpayededct(basicSalary) {
    //if statements to calculate tax
    if(basicSalary <= 24000) {
        return 0.1 * 24000;
    }else if(basicSalary >= 24001 && basicSalary <= 32333) {
        return 0.25 * (basicSalary -24001) + 2400;
    }else if(basicSalary >= 32334 && basicSalary <= 500000) {
        return 0.3 * (basicSalary - 32334) + 2083 + 24000;
    }else if(basicSalary >= 500001 && basicSalary <= 800000) {
        return 0.325 * (basicSalary - 5000001) + 140299.8 + 2083 + 2400;
    }else
    return 0.35 * (basicSalary - 800000) + 97500 + 140299.8 + 2083 + 2400;
}

let netSalary;
//function to calculate an individual's net salary
function wholeSalary() {
    const nssf = 1080;
    const relief = 2400;
    //variable to propmpt user to enter salary
    const wholeSalary = parseInt(document.getElementByid("salary"). Value)
    //variable to prompt user to enter benefits
    const benefits = parseInt(document.getElementByid("benefit"). Value);
    const totaldeductions = nhifdedct(grosspay) + payededct(grosspay) + nssf;
    netSalary = (wholeSalary + benefits + relief) - totalDeductions;
    document.gatElementByid("theBank").textContent = `kes ${netsalary.toFixed(2)}`;
}

