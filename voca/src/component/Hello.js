import Name from './Name'
import styles from './Hello.module.css';

const Hello = () => {
    function showName (){
        console.log('asj');
    }

    function showAge (age){
        console.log (age);
    }

    function inputChange (txt) {
        console.log(txt)
    }

    return (
        <div>
            <span>Hello</span>
            {/* <Name/> */}
            {/* <div className={styles.box}>Hello.css에 있는 sytle</div> */}
            <button onClick = {showName} >Show Name</button>
            <button onClick = {
                ()=>{
                    showAge(26);
                }
            } >Show Age</button>
            <input onChange = {
                (e) => {
                    const event = e.target.value;
                    inputChange(event)
                }
            }></input>
        </div>
    )
}

export default Hello;