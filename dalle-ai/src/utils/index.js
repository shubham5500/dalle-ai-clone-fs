import { surpriseMePrompts } from "../contants";

export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    return surpriseMePrompts[randomIndex];
}