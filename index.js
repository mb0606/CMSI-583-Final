import readlineSync from 'readline-sync';
import TuringMachine from "./turingMachine";
import fs from 'fs';

fs.readFile(process.argv[2], 'utf8', function(err, data) {
    if (err) throw err;
    const config = JSON.parse(data)
    // console.log(config);
        const turing = new TuringMachine(config);
        for(const string of config.tests.accepts) {
            console.log("this is  accepts : ", string)
            const accepted = turing.accept(string);
            if (accepted) {
                console.log("String is accepted!")
            } else {
                console.log("String is not accepted.")
            }
        }
        for(const string of config.tests.rejects) {
            console.log("this is  reject : ", string)
            const accepted = turing.accept(string);
            if (accepted) {
                console.log("String is accepted!")
            } else {
                console.log("String is not accepted.")
            }
        }
});