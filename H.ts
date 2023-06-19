import nodemailer from 'nodemailer';

export function checkDiskSize(diskSize: number, logFn: (message: string) => void) {
    if (diskSize < 500000000) {
        logFn(`Low disk space: ${diskSize} bytes`);
    }
}

export function sendLog(content: string) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'juku@juurikas.ee',
            pass: 'kala'
        }
    });

    const mailOptions = {
        from: 'juku@juurikas.ee',
        to: 'juku@juurikas.ee',
        subject: 'Log',
        text: content
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
        if (error) {
            console.error(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export function initApp(freeMemory: number, logFn: (message: string) => void): boolean {
    if (freeMemory < 100000) {
        logFn(`Vaba mälu ainult ${freeMemory}`);
        return false;
    }

    logFn('Rakendus käivitus');
    return true;
}

// Usage example:
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'juku@juurikas.ee',
        pass: 'kala'
    }
});

initApp(150000, console.log);
sendLog(transporter,'Sample log content')
checkDiskSize(100000000, console.log);
