//argv
console.log(process.argv); //väljastab [array] kahe objektiga
// kui lisada käsklusesse nt 'import' või '-s' siis väljastab kolmandana ka selle
console.log(process.argv[2]); //väljastab soovitud tulemi, nt [2] näitab 3. obj. massiivis

//process.env
console.log(process.env.LOGNAME); //väljastab kõik keskkonna muutujad

//pid
console.log(process.pid); //väljastab pid

//cwd
console.log(process.cwd());

//title
console.log(process.title);

//memoryUsage()
console.log(process.memoryUsage());

//update()
console.log(process.uptime());

process.on('exit', (code) => {
    console.log(`Protsess väljub koodiga: ${code}`); //Protsess väljub koodiga: 0
});

//exit()
process.exit(0); //0 = success
// exits the process

console.log('Hello from after exit');   //not gonna show