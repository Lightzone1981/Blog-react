import { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0)
    const [run, setRun] = useState(false)
    
    useEffect(() => {
        let timerRun:any 
        if (run) {
            timerRun = setInterval(() => { setTime(time + 1) }, 1000)
        } 
        return () => {
            clearInterval(timerRun)
        }
    })
    return (
        <div className="timer" style={{display:'flex', gap:'2rem',alignItems:'center'}}>
            <button className='start-button' style={{ fontSize: '2rem', padding: '1rem', cursor: 'pointer' }}
                onClick={() => { setRun(true) }}>Start</button>
            
            <p className="time-count" style={{ fontSize: '2rem' }}>{time}</p>
            
            <button className='stop-button' style={{fontSize:'2rem', padding: '1rem', cursor:'pointer'}} onClick={() => { setRun(false) }}>Stop</button>
        </div>
    )
}
export default Timer