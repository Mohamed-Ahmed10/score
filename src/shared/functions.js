export const reset = (setTime, setIsRunning) => {
    setTime(240)
    setIsRunning(false)
}

export const handleStart = (setIsRunning) => {
    setIsRunning(true);
};

export const handlePause = (setIsRunning) => {
    setIsRunning(false);
};

export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};