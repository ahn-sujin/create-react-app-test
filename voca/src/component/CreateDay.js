import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch';

const CreateDay = () => {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function addDay(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/days`,{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                day: days.length + 1,
            }),
        }).then((res) => {
            if(res.ok){
                alert('날짜가 추가되었습니다.');
                navigate('/');
            }
        });
    }

    return(
        <>
            <h3>현재일수 : {days.length}일</h3>
            <button onClick = {addDay}>추가</button>
        </>
    )
}

export default CreateDay;