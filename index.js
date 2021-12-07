import readlineSync from 'readline-sync';
import TuringMachine from "./turingMachine";
import fs from 'fs';


fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    const config = JSON.parse(data)
    console.log(config);
       
});