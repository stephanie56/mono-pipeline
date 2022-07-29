import { addOneAgain } from '@stephaniez_rangle/a';

export const addTwo = (num: number) => {
    const addOneCal = addOneAgain(1);
    console.log(`result from addOne is ${addOneCal}`);
    return (num + 2);
}

export default addTwo;