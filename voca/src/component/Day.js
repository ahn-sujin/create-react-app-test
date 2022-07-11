import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
// import dummy from '../db/data.json';
import Word from './Word';


const Day = () => {
    const day = useParams().day;
    const [words, setWords] = useState([]);
    const wordList = words.filter(word => word.day === Number(day));

    useEffect(()=>{
        fetch(`http://localhost:3001/words?${day}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setWords(data)
        })
    },[day])
   
    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {wordList.map(word => (
                        <Word word = {word} key = {word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day;