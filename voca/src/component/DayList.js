import  {Link} from 'react-router-dom';
import dummy from '../db/data.json';

const DayList = () => {
    return(
        <ul className ="list_day">
            {dummy.days.map(day => (
                <li key = {day.id}>
                    <Link to = {`/day/${day.day}`}>{day.day}Day</Link>
                </li>
            ))}
        </ul>
    )
}

export default DayList;