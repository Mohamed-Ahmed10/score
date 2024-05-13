import { useState, useEffect } from 'react';
import { Button, Badge } from "react-bootstrap";
import audioPath from '../assets/audios/switch_players.mp3'
import { reset, handleStart, handlePause, formatTime } from "../shared/functions"

export default function Tennis() {


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



    return (
        <div className="text-center mt-4 pt-4">
            <h1>Tennis</h1>

            <h1 className='text-white'>
                <Badge bg="secondary">{formatTime(time)}</Badge>
            </h1>
            <Button className="mx-3" onClick={() => handleStart(setIsRunning)} variant="primary">Start</Button>
            <Button className="mx-3" onClick={() => handlePause(setIsRunning)} variant="info">Pause</Button>
            <Button className="mx-3" onClick={() => reset(setTime, setIsRunning)} variant="success">Reset</Button>
            <p className="text-white w-50 m-auto mt-4">In the tennis game, change management competencies are evident through adaptability, problem-solving, and flexibility as players navigate equipment variations mid-match. Rapid learning and decision-making under pressure showcase the importance of continuous adaptation and strategic agility. Moreover, emphasizing change management planning underscores the need for proactive strategies to facilitate smooth transitions amidst uncertainty.</p>
        </div>
    )
}
