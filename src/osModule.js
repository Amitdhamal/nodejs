import os from 'os';

console.log('Free RAM:', os.freemem()/1024/1024/1024, 'GB');
console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus());
console.log("PC uptime (Hours):", os.uptime()/3600);
console.log("Home directory:", os.homedir());
console.log("OS type:", os.type());
console.log("OS version:", os.version());
console.log("OS architecture:", os.arch());
console.log("OS release:", os.release());
console.log("OS hostname:", os.hostname());
console.log("OS network interfaces:", os.networkInterfaces());
