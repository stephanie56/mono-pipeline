import { addOne } from 'a';

export const addTwo = (num: number) => {
    const addOneCal = addOne(1);
    console.log(`result from addOne is ${addOneCal}`);
    return (num + 2);
}

// test

export default addTwo;