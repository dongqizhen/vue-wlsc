const chalk = require('chalk');
const command = process.env.npm_lifecycle_event;
let API_HOST = {};


let alpha = { // 开发
    URL: "http://60.195.252.86:8083",
    INFO_URL: "http://60.195.252.86:8082",
    WEB_URL: "http://60.195.252.86:8080",
    FILE_URL: "http://60.195.252.86:8080"
}
let beta = { // 测试
    URL: "https://www.api/code",
    BASE_URL: "https://www.api/code"
}
let gamma = { // 验收版本
    URL: "http://prople.haoyigong.com",
    INFO_URL: "http://infople.haoyigong.com",
    WEB_URL: "http://webple.haoyigong.com",
    FILE_URL: "http://webple.haoyigong.com"
}
let release = { // 正式版本
    URL: "http://pro.haoyigong.com",
    INFO_URL: "http://info.haoyigong.com",
    WEB_URL: "http://web.haoyigong.com",
    FILE_URL: "http://file.haoyigong.com"
}

if (command == "dev:alpha") {
    console.log(chalk.green('当前环境为:alpha'));
    API_HOST = alpha;
} else if (command == "dev:beta") {
    console.log(chalk.green('当前环境为:beta'));
    API_HOST = beta;
} else if (command == "dev:gamma") {
    console.log(chalk.green('当前环境为:gamma'));
    API_HOST = gamma;
} else if (command == "dev:release") {
    console.log(chalk.green('当前环境为:release'));
    API_HOST = release;
} else {
    API_HOST = alpha;
}

module.exports = API_HOST