import { surpriseMePrompts } from '../constants';

// Get random prompt for user to use to generate a random ai image
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //Don't get same random prompt in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}