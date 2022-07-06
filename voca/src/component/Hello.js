import { useState } from 'react'; 
import styles from './Hello.module.css';

const Hello = (props) => {
    console.log(props);
    const [name, nameChange] = useState('안수진');
    const [score, scoreChange] = useState(props.score);
    const msg = score > 50 ?  "합격입니다." : "불합격입니다.";

    return (
        <div>
            <span>props</span>
            <p>{name} / {score}점 : {msg}</p>
            <button onClick = {() => {
                nameChange(name === '안수진' ? '홍둥택' : '안수진');
                
            }}>Change Name</button>
            <button onClick = {() => {
                scoreChange(score + 1);
            }}>plus</button>
            <button onClick = {() => {
                scoreChange(score - 1);
            }}>Minus</button>
        </div>
    )
}

export default Hello;