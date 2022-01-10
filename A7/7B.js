const fs = require('fs');

if(process.argv.length < 3){
    console.error("you must specify directory ");
    process.exit(1);
}

const dir = process.argv[2];

if(!fs.existsSync(dir) ){
    console.error(`the ${dir} does not exist`);
    process.exit(1);
}
if(!fs.statSync(dir).isDirectory()) {
    console.error(`the ${dir} is not a valid directory`)
}

fs.readdir(dir, (err,files) => {
    if(err) {
        throw err
    }
})


    files.forEach(file=> {
        fs.watch(`${dir}\\${file}`, {
            persistent: true,
            recursive: true,
            interval: 4000
        }, ()=>{
            console.log( fs.readFileSync(`${dir}\\${file}`, "utf8"));
        })
    });