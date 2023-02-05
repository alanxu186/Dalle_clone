import { surpriseMePrompts } from '../constants';

import FileSaver from 'file-saver';

// Get random prompt for user to use to generate a random ai image
export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //Don't get same random prompt in a row
    if(randomPrompt === prompt) return getRandomPrompt(prompt)

    return randomPrompt;
}

//import FileSaver
//pass _id,photo parameters
//implement function 
export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpeg`);
}