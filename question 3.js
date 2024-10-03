const fs = require('fs');

const logFiles = [
    'loge.txt',
    'log1.txt',
    'log2.txt',
    'log3.txt',
    'log4.txt',
    'log5.txt',
    'log6.txt',
    'log7.txt',
    'log8.txt',
    'log9.txt'
];
const displayLogs = (logs) => {
    console.log(logs.join('\n'));
};
const deleteLogs = (logs) => {
    logs.forEach((file) => {
        console.log(`delete files...${file}`);
       
    });
};
displayLogs(logFiles);
deleteLogs(logFiles);
