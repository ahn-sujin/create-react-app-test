import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';

const CreateWord = () => {
    const [days, setDays] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/days')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setDays(data)
        })
    },[])

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    function onSubmit(e){
        e.preventDefault();

        fetch('http://localhost:3001/words',{
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body:JSON.stringify({
                day : dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                idDone : false
            })
        })
        .then((res) => {
            if(res.ok){
                alert('등록 되었습니다.')
                navigate(`/day/${dayRef.current.value}`)
            }
        })
    }


    return(
        <form>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="dog" ref={engRef}></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="개" ref={korRef}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}> 
                    {days.map((day) => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                    
                </select>
            </div>
            <button onClick={onSubmit}>등록</button>
        </form>
    )
}

export default CreateWord;