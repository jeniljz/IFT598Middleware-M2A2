var loanData = []; //creating an empty array 
var loanInfo1 = {
    id: 1,
    customerName: "Jenil Patel",
    phoneNumber: 8141078090,
    address: "Phoenix, Arizona",
    loanAmount: 25000,
    interest: 10,
    loanTermYears: 24,
    loanType: "Student Loan",
    description: "Student Loan for M.S IT at ASU",
    calculatedLoanAmount: function() {
        //PV=PMT/i[1-1/(1+i)^n] //loan calculation formulae
        let tmpIntPMon = (this.interest/100)/12;
        let tmpPMTDInt = this.loanAmount/tmpIntPMon;
        let PowCal = Math.pow( [1 + tmpIntPMon] , this.loanTermYears);
        let tmpSection = 1 - (1 / PowCal);

        let tmpPaidLoan =  tmpPMTDInt * tmpSection;
        let paidLoan = Math.round(tmpPaidLoan);
        // console.log('Calculated Loan Amount for ID: 1 $', paidLoan);
        // console.log('paidloan : ', paidLoan);
        return paidLoan;
    }
}
var loanInfo2 = {
    id: 2,
    customerName: "Milan Soni",
    phoneNumber: 9909111286,
    address: "Abu Dhabi, UAE",
    loanAmount: 30000,
    interest: 7,
    loanTermYears: 60,
    loanType: "Car Loan",
    description: "Car Loan for daily work drive",
    calculatedLoanAmount: function() {
        //PV=PMT/i[1-1/(1+i)^n]
        let tmpIntPMon = (this.interest/100)/12;
        let tmpPMTDInt = this.loanAmount/tmpIntPMon;
        let PowCal = Math.pow( [1 + tmpIntPMon] , this.loanTermYears);
        let tmpSection = 1 - (1 / PowCal);

        let tmpPaidLoan =  tmpPMTDInt * tmpSection;
        let paidLoan = Math.round(tmpPaidLoan);
        // console.log('Calculated Loan Amount for ID: 2 $', paidLoan);
        // console.log('paidloan : ', paidLoan);
        return paidLoan;
    }
}
var loanInfo3 = {
    id: 3,
    customerName: "Prithu",
    phoneNumber: 7541078090,
    address: "Torronto, Canada",
    loanAmount: 110000,
    interest: 13,
    loanTermYears: 60,
    loanType: "Home Loan",
    description: "Home Loan in Canada",
    calculatedLoanAmount: function() {
        //PV=PMT/i[1-1/(1+i)^n]
        let tmpIntPMon = (this.interest/100)/12;
        let tmpPMTDInt = this.loanAmount/tmpIntPMon;
        let PowCal = Math.pow( [1 + tmpIntPMon] , this.loanTermYears);
        let tmpSection = 1 - (1 / PowCal);

        let tmpPaidLoan =  tmpPMTDInt * tmpSection;
        let paidLoan = Math.round(tmpPaidLoan);
        // console.log('Calculated Loan Amount for ID: 3 $', paidLoan);
        // console.log('paidloan : ', paidLoan);
        return paidLoan;
    }
}
var loanInfo4 = {
    id: 4,
    customerName: "Akansha Patel",
    phoneNumber: 4563214825,
    address: "San Francisco, California",
    loanAmount: 250000,
    interest: 9,
    loanTermYears: 72,
    loanType: "Industrial Loan",
    description: "Industrial Loan for opening casting mill",
    calculatedLoanAmount: function() {
        //PV=PMT/i[1-1/(1+i)^n]
        let tmpIntPMon = (this.interest/100)/12;
        let tmpPMTDInt = this.loanAmount/tmpIntPMon;
        let PowCal = Math.pow( [1 + tmpIntPMon] , this.loanTermYears);
        let tmpSection = 1 - (1 / PowCal);

        let tmpPaidLoan =  tmpPMTDInt * tmpSection;
        let paidLoan = Math.round(tmpPaidLoan);
        // console.log('Calculated Loan Amount for ID: 4 $', paidLoan);
        // console.log('paidloan : ', paidLoan);
        return paidLoan;
    }
}
var loanInfo5 = {
    id: 5,
    customerName: "Prit Patel",
    phoneNumber: 9764125896,
    address: "Perth, Australia",
    loanAmount: 10000,
    interest: 5,
    loanTermYears: 48,
    loanType: "Bike Loan",
    description: "Bike for college", 
    calculatedLoanAmount: function() {
        //PV=PMT/i[1-1/(1+i)^n]
        let tmpIntPMon = (this.interest/100)/12;
        let tmpPMTDInt = this.loanAmount/tmpIntPMon;
        let PowCal = Math.pow( [1 + tmpIntPMon] , this.loanTermYears);
        let tmpSection = 1 - (1 / PowCal);

        let tmpPaidLoan =  tmpPMTDInt * tmpSection;
        let paidLoan = Math.round(tmpPaidLoan);
        // console.log('Calculated Loan Amount for ID: 5 $', paidLoan);
        // console.log('paidloan : ', paidLoan);
        return paidLoan;
    }
}
loanData.push(loanInfo1); //Pushing all 5 objects into Empty LoanData array
loanData.push(loanInfo2);
loanData.push(loanInfo3);
loanData.push(loanInfo4);
loanData.push(loanInfo5); 

loanData.forEach((item => console.log(item.calculatedLoanAmount()))); // console.log('Displaying Array', loanData); //printing the array consisting 5 objects

let GrandTotalLoanAmount = loanData[0].calculatedLoanAmount() + loanData[1].calculatedLoanAmount() + loanData[2].calculatedLoanAmount() + loanData[3].calculatedLoanAmount() + loanData[4].calculatedLoanAmount(); //Calculate Sum of array
console.log('Grand Total Loan Amount: $', GrandTotalLoanAmount); //printing sum of array

console.log(loanData[0].calculatedLoanAmount());

module.exports.loanData = loanData;
module.exports.GrandTotalLoanAmount = GrandTotalLoanAmount;
