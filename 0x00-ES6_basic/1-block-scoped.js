export default function taskblock(trueOrFalse) {
    let task = false;
    let task2 = true;

    if (trueOrFalse){
        let task = true;
        let task2 = false;
    }

    return [task, task2];
}