const httpServer = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate');

// Fetching Data
const LoanDataJS = require ('./data/data.js');
// const tempLoanData = fs.readFileSync(
//     `${__dirname}/data/data.json`,
//     'utf-8'
//  );

 /////////////////////////////////
// Template
const templateHTMLLoan = fs.readFileSync(
    `${__dirname}/template/index.html`,
    'utf-8'
  );

//  const dataObj = JSON.parse(LoanDataJS);// string to JavaScript Object JSON

////////////////////////////////
//Create Server
// const server = httpServer.createServer(function (req, res) {// call back function
const server = httpServer.createServer( (req, res) =>{// call back function

    // console.log(JSON.stringify(urlParameter.query));// convert to String
    // console.log(JSON.stringify(urlParameter.pathname));// convert to String
    const {query,pathname} = url.parse(req.url, true); // object distructors
    if(query){// if there is query parameter named id read as string
        // Courses page
        if (pathname === '/' || pathname.toLowerCase() === '/loan') {
            res.writeHead(200, {// Every thing ran successfully
                'Content-type': 'text/html'
            });
            // const loanData = dataObj[Number(query.id)];// convert string to numeric value
            // const strLoanName = JSON.stringify(loanData);

            //Setting loan amounts to objects
            //setting an empty string
            let tmpLoanData =[];

            let CALLOANAMOUNT1 = LoanDataJS.loanData[0].calculatedLoanAmount();
            let CALLOANAMOUNT2 = LoanDataJS.loanData[1].calculatedLoanAmount();
            let CALLOANAMOUNT3 = LoanDataJS.loanData[2].calculatedLoanAmount();
            let CALLOANAMOUNT4 = LoanDataJS.loanData[3].calculatedLoanAmount();
            let CALLOANAMOUNT5 = LoanDataJS.loanData[4].calculatedLoanAmount();
            let GRANDTOTALAMOUNT = LoanDataJS.GrandTotalLoanAmount;

            tmpLoanData.push(CALLOANAMOUNT1);
            tmpLoanData.push(CALLOANAMOUNT2);
            tmpLoanData.push(CALLOANAMOUNT3);
            tmpLoanData.push(CALLOANAMOUNT4);
            tmpLoanData.push(CALLOANAMOUNT5);
            tmpLoanData.push(GRANDTOTALAMOUNT);

            // console.log('test amount', CALLOANAMOUNT1);
            // console.log(tmpLoanData);
            
            const loanHTML = replaceTemplate(templateHTMLLoan, tmpLoanData);// function that will replace the course values in the HTML
            res.end(loanHTML);
            // console.log(loanData);
        }
    }
    else{
            res.writeHead(404, {// Server did not find what you were looking for
                'Content-type': 'text/html'
            });
            res.end(`resource not found`)
        }
    });

//Start Listening to requests
server.listen(8000, 'localhost', ()=> {
    console.log('Listening to requests on port 8000');
});

