const findAndModifyPomodoro = (arrayPomodoros, indicator, functionModify) => {
    return arrayPomodoros.map((obj) => (obj.indicator !== indicator) ?
        obj : functionModify(obj))
}

const verifyCompletedPomodoro = obj => {
    const objDoneFalse = obj.toDoList.find(task => task.done === false)
    return ({
        ...obj,
        completed: objDoneFalse ? false : true
    })
}

export {
    findAndModifyPomodoro,
    verifyCompletedPomodoro
}
