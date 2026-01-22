import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'messages.json');

// Ensure data directory exists
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
    fs.mkdirSync(path.join(process.cwd(), 'data'));
}

// Ensure file exists
if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([]));
}

export interface Message {
    id: string;
    name: string;
    mobile: string;
    service: string;
    message: string;
    createdAt: string;
}

export function getMessages(): Message[] {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
}

export function addMessage(message: Omit<Message, 'id' | 'createdAt'>) {
    const messages = getMessages();
    const newMessage: Message = {
        ...message,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
    };
    messages.push(newMessage);
    fs.writeFileSync(DB_PATH, JSON.stringify(messages, null, 2));
    return newMessage;
}

export function deleteMessage(id: string) {
    let messages = getMessages();
    messages = messages.filter(m => m.id !== id);
    fs.writeFileSync(DB_PATH, JSON.stringify(messages, null, 2));
}
