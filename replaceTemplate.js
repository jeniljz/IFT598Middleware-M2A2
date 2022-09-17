module.exports = (htmlStr, tmpLoanData)=>{ // fat arrow function or lambda
    output = htmlStr.replace(/{%CALLOANAMOUNT1%}/g, tmpLoanData[0]),
    output = htmlStr.replace(/{%CALLOANAMOUNT2%}/g, tmpLoanData[1]),
    output = htmlStr.replace(/{%CALLOANAMOUNT3%}/g, tmpLoanData[2]),
    output = htmlStr.replace(/{%CALLOANAMOUNT4%}/g, tmpLoanData[3]),
    output = htmlStr.replace(/{%CALLOANAMOUNT5%}/g, tmpLoanData[4]),
    output = htmlStr.replace(/{%GRANDTOTALAMOUNT%}/g, tmpLoanData[5]);
    return output;
}