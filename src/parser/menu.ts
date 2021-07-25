import moment from 'moment'

export const parse = async () => {

    var fs = require('fs')
    var path = `${process.cwd()}/src/data/`
    var today = ['mon','tue','wed','thu','fri','sat'][moment().day()];
    var filename = `${today}.md`

    // console.log(path)
    // console.log(today)
    // console.log(filename)

    try {
        var menu = fs.readFileSync(path + `${filename}`);
        return menu.toString()
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log('File not found!');
            return "404"
        } 
    }
    
    
}