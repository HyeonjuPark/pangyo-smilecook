import { parseHTML } from 'cheerio';
import moment from 'moment'

export const parse = async () => {

    var fs = require('fs')
    var path = `${process.cwd()}/src/data/`
    var today = ['mon','tue','wed','thu','fri','sat'][moment().day()];
    var filename = `${today}.md`
    var list = [
        '- 미분당',
        '- 닭한마리',
        '- 낙지한마리',
        '- 빨간집',
        '- 감성타코',
        '- 도산분식',
        '- 샐러디',
        '- 떡볶이 + 감튀',
        '- 국수 + 보쌈',
        '- 맥날',
        '- 뼈해장국 (회사 아래)',
    ];
    let i = 0;
    let result = [];
    while (i < 3) {
        result = result.concat(list.splice(Math.floor(Math.random() * list.length), 1));
        i++;
    }

    console.log(result);

    // console.log(path)
    // console.log(today)
    // console.log(filename)

    try {
        // var menu = fs.readFileSync(path + `${filename}`);
        return result.join('\n');
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
            return "404"
        } 
    }
    
    
}
console.log(parse());