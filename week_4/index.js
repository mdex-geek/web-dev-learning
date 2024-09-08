import fs from 'fs';
import { Command } from 'commander';

const program = new Command();

program.
        name('count the word')
        .description('this cli count the word inside the file ')
        .version('0.10.0')

program.command('count')
        .description('count the word inside the file ')
        .argument('<file>','name of teh file ')
        .action((file) => {
            fs.readFile(file,'UTF-8',(err,data)=>{
                if (err) {
                  console.log(err); 
                  return ; 
                }else{
                    const word = data.split(/\s+/);
                    const wordCount = word.length;
                    console.log(`number of word ${wordCount} inside the ${file}`);
                }
            });
        });

program.parse();