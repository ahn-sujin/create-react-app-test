import { useRef } from 'react';
import useFetch from '../hooks/useFetch';

const CreateWord = () => {
    const days = useFetch('http://localhost:3001/days');

    function onSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/words`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone : false
            }),
        }).then((res) => {
            if(res.ok){
                alert('단어가 추가되었습니다.')
            }
        });
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    
    return(
       <form>
           <div className ="input_area">
                <label>Eng</label>
                <input type="text" placeholder="dog" ref={engRef}></input>
           </div>
           <div className ="input_area">
                <label>Kor</label>
                <input type="text" placeholder="개" ref={korRef}></input>
           </div>
           <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
           </div>
           <button onClick = {onSubmit}>저장</button>
       </form>
    )
}

export default CreateWord;