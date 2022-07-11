import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
// import dummy from '../db/data.json';

const DayList = () => {
    const [days, setDays] = useState([]);    
    const [count, setCount] = useState(0);

    function onClick1(){
        setCount(count + 1)
    }

    function onClick2(){
        setDays([
            ...days,
            {
                id:Math.random(),
                day: 1
            }
        ])
    }

    useEffect(()=>{
        console.log('count change')
    },[count])

    return(
        <>
            <ul className ="list_day">
                {days.map(day => (
                    <li key = {day.id}>
                        <Link to = {`/day/${day.day}`}>{day.day}Day</Link>
                    </li>
                ))}
            </ul>
            <button onClick = {onClick1}>{count}</button>
            <button onClick = {onClick2}>day change</button>
        </>
        
    )
}

export default DayList;