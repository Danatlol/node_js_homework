import csv from 'csvtojson';
import fs from 'fs';
import stream from 'stream';

const inputFileStream = fs.createReadStream(`${__dirname}/csv/books_db.csv`);

stream.pipeline(
    csv().fromStream(inputFileStream),
    fs.createWriteStream(`${__dirname}/csv/books.txt`),
    error => {
        if (error) {
            console.error(`Error: ${error}`);
        } else {
            console.log('Parsed successfully!!!');
        }
    }
)