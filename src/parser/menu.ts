import { parseHTML } from 'cheerio';
import moment from 'moment'

export const parse = async () => {

    var fs = require('fs')
    var path = `${process.cwd()}/src/data/`
    var today = ['mon','tue','wed','thu','fri','sat'][moment().day()];
    var filename = `${today}.md`
    var list: string[] = [
        '- 미분당',
        '- 닭한마리',
        '- 낙지한마리',
        '- 빨간집 돈까스',
        '- 감성타코',
        '- 도산분식',
        '- 샐러디',
        '- 떡볶이 + 감튀',
        '- 국수 + 보쌈',
        '- 맥날',
        '- 뼈해장국 (회사 아래)',
        '- 마녀김밥',
        '- 신사랑',
        '- 쮸즈',
        '- 영동설렁탕',
        '- 김북순큰남비집',
        '- 시골밥상',
        '- 이삭버거',
        '- 홍콩반점',
        '- 서브웨이',
        '- 도미노피자',
        '- 1층 한우집',
        '- 홍두깨 수타 칼국수',
        '- 강남 따로 국밥',
        '- 이심',
        '- 대풍(생선구이)',
        '- 리틀 인디아',
    ];
    let i = 0;
    let result:string[] = [];
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