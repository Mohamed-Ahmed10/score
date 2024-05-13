import { useState, useEffect } from 'react';
import { Button, Badge } from "react-bootstrap";
import audioPath from '../assets/audios/switch_players.mp3'
import { reset, handleStart, handlePause, formatTime } from "../shared/functions"

export default function Climbing() {

    const [time, setTime] = useState(240); // 4 minutes in seconds
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;

        if (isRunning && time > 0) {
            timer = setTimeout(() => setTime(time - 1), 1000);
        } else if (time === 0) {
            const audio = new Audio(audioPath);
            audio.play();
            setIsRunning(false)
        }

        return () => clearTimeout(timer);
    }, [isRunning, time]);

    return (
        <div className="text-center mt-4 pt-4">
            <h1>Climbing</h1>

            <h1 className='text-white'>
                <Badge bg="secondary">{formatTime(time)}</Badge>
            </h1>
            <Button className="mx-3" onClick={() => handleStart(setIsRunning)} variant="primary">Start</Button>
            <Button className="mx-3" onClick={() => handlePause(setIsRunning)} variant="info">Pause</Button>
            <Button className="mx-3" onClick={() => reset(setTime, setIsRunning)} variant="success">Reset</Button>
            <p className="text-white w-50 m-auto mt-4"> Within the climbing VR game, change management competencies can be assessed through adaptability to varying challenges, strategic decision-making in utilizing resources efficiently (like energy shakes), time management skills to reach multiple stops within a set time frame, resilience in facing setbacks or fatigue, and effective communication in coordinating movements (like using both hands). Additionally, problem-solving abilities and teamwork may be evaluated as players strategize and collaborate to overcome obstacles collectively.</p>
        </div>
    )
}
