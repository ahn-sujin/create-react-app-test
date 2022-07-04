import { useState } from 'react'; 
import Name from './Name'
import styles from './Hello.module.css';

const Hello = () => {
    const [name, nameChange] = useState('asj');

    function chageName() {
        const newName = name === 'asj' ? 'hdh' : 'asj';
        nameChange(newName);
     }

    return (
        <div>
            <span>State</span>
            <p>{name}</p>
            <button onClick = {chageName}>Chane Name</button>
        </div>
    )
}

export default Hello;