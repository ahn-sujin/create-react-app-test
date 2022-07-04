import Name from './Name'
import styles from './Hello.module.css';

const Hello = () => {
    return (
        <div>
            <span>Hello</span>
            <Name/>
            <div className={styles.box}>Hello.css에 있는 sytle</div>
        </div>
    )
}

export default Hello;