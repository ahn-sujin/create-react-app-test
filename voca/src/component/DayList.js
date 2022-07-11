import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
// import dummy from '../db/data.json';

const DayList = () => {
    const [days, setDays] = useState([]);    
    
    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setDays(data)
        })
    },[])

    return(
        <>
            <ul className ="list_day">
                {days.map(day => (
                    <li key = {day.id}>
                        <Link to = {`/day/${day.day}`}>{day.day}Day</Link>
                    </li>
                ))}
            </ul>
        </>
        
    )
}

export default DayList;