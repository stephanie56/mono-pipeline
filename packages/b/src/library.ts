import { addTwo } from '@stephaniez_rangle/a';

export const addThree = (num: number) => {
    const addOneCal = addTwo(1);
    console.log(`result from addOne is ${addOneCal}`);
    return (num + 2);
}

export default addThree;