import * as nodemailer from 'nodemailer';
import { checkDiskSize, sendLog, initApp } from "./H";

jest.mock('nodemailer');

describe('h', () => {
    const mockTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'juku@juurikas.ee',
            pass: 'kala'
        }
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('start', () => {
        expect(initApp(200000, console.log)).toBe(true);
    });

    test('mock memory little', () => {
        const mockFn = jest.fn();
        initApp(20000, mockFn);
        expect(mockFn).toBeCalledWith("Vaba mälu ainult 20000");
        expect(mockFn).toBeCalledTimes(1);
    });

    test('disk size ok', () => {
        const mockFn = jest.fn();
        checkDiskSize(1000000000, mockFn);
        expect(mockFn).not.toBeCalled();
    });

    test('disk size little', () => {
        const mockFn = jest.fn();
        checkDiskSize(500000000, mockFn);
        expect(mockFn).toBeCalledWith("Low disk space: 500000000 bytes");
        expect(mockFn).toBeCalledTimes(1);
    });

    test('disk size large', () => {
        const mockFn = jest.fn();
        checkDiskSize(2000000000, mockFn);
        expect(mockFn).not.toBeCalled();
    });

    test('send log', () => {
        const mockFn = jest.fn();
        sendLog(mockTransporter, 'Sample log content');
        expect(mockTransporter.sendMail).toHaveBeenCalledWith(
            expect.objectContaining({
                from: 'juku@juurikas.ee',
                to: 'juku@juurikas.ee',
                subject: 'Log',
                text: 'Sample log content'
            }),
            expect.any(Function)
        );
    });
});
