import { useState, useEffect } from 'react';
import { Button, Badge } from "react-bootstrap";
import audioPath from '../assets/audios/switch_players.mp3'

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
        }

        return () => clearTimeout(timer);
    }, [isRunning, time]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handlePause = () => {
        setIsRunning(false);
    };

    const formatTime = () => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="text-center mt-4 pt-4">
            <h1>Climbing</h1>

            <h1 className='text-white'>
                <Badge bg="secondary">{formatTime()}</Badge>
            </h1>
            <Button className="mx-3" onClick={handleStart} variant="primary">Start</Button>
            <Button className="mx-3" onClick={handlePause} variant="info">Pause</Button>
            <p className="text-white w-50 m-auto mt-4"> Within the climbing VR game, change management competencies can be assessed through adaptability to varying challenges, strategic decision-making in utilizing resources efficiently (like energy shakes), time management skills to reach multiple stops within a set timeframe, resilience in facing setbacks or fatigue, and effective communication in coordinating movements (like using both hands). Additionally, problem-solving abilities and teamwork may be evaluated as players strategize and collaborate to overcome obstacles collectively.</p>
        </div>
    )
}
