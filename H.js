"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = exports.sendLog = exports.checkDiskSize = void 0;
var nodemailer_1 = require("nodemailer");
function checkDiskSize(diskSize, logFn) {
    if (diskSize < 500000000) {
        logFn("Low disk space: ".concat(diskSize, " bytes"));
    }
}
exports.checkDiskSize = checkDiskSize;
function sendLog(content) {
    var transporter = nodemailer_1.default.createTransport({
        service: 'gmail',
        auth: {
            user: 'juku@juurikas.ee',
            pass: 'kala'
        }
    });
    var mailOptions = {
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
        }
        else {
            console.log('Email sent: ' + info.response);
        }
    });
}
exports.sendLog = sendLog;
function initApp(freeMemory, logFn) {
    if (freeMemory < 100000) {
        logFn("Vaba m\u00E4lu ainult ".concat(freeMemory));
        return false;
    }
    logFn('Rakendus käivitus');
    return true;
}
exports.initApp = initApp;
// Usage example:
var transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'juku@juurikas.ee',
        pass: 'kala'
    }
});
initApp(150000, console.log);
sendLog(transporter, 'Sample log content');
checkDiskSize(100000000, console.log);
