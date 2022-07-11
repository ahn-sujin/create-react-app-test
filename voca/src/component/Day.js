import { useParams } from 'react-router-dom';
import Word from './Word';
import useFetch from '../hooks/useFetch';


const Day = () => {
    const day = useParams().day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
   
    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word = {word} key = {word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day;