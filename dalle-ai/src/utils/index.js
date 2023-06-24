import { surpriseMePrompts } from "../contants";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    return surpriseMePrompts[randomIndex];
}