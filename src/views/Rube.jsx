import { useState, useEffect } from 'react';
import { Button, Badge } from "react-bootstrap";
import audioPath from '../assets/audios/switch_players.mp3'
import { reset, handleStart, handlePause, formatTime } from "../shared/functions"

export default function Rube() {
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
            <h1>The VR bowling</h1>

            <h1 className='text-white'>
                <Badge bg="secondary">{formatTime(time)}</Badge>
            </h1>
            <Button className="mx-3" onClick={() => handleStart(setIsRunning)} variant="primary">Start</Button>
            <Button className="mx-3" onClick={() => handlePause(setIsRunning)} variant="info">Pause</Button>
            <Button className="mx-3" onClick={() => reset(setTime, setIsRunning)} variant="success">Reset</Button>
            <p className="text-white w-50 m-auto mt-4">في دورتك للتفكير الإبداعي، تحويل الكرات البولينغ إلى جبن وعناصر متنوعة يعزز التفكير الجانبي ويشجع على حل المشكلات غير التقليدية. بينما يتحدى المشاركون العقبات في البيئة، يمارسون القدرة على التكيف والابتكار، مما يعزز الإبداع تحت القيود. تقييم هذه النشاطات يقيم قدرة المشاركين على توليد أفكار جديدة، والتفكير بشكل نقدي حول استخدام الموارد، والتكيف مع التحديات غير المتوقعة، وهي كلها مهارات أساسية لتعزيز التفكير الإبداعي.
                وهو يقيس العديد من صفات المبدعين التي تم مناقشتها في البرنامج و كيفية استخدامها في الحياه العمليه</p>
        </div>
    )
}
