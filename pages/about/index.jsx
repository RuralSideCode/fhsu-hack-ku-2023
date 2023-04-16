
import styles from './about.module.css';




const about = () => {
return (
<>
<div
      style={{
        backgroundImage: "linear-gradient(to right, gray, #019CAD)",
        width: '1500px',
        height: '1000px'
      }}>
    <h1 className={styles.header}>
        About us and our program
    </h1>
<p className={styles.desc}>
    We are from Fort Hays State University</p>
<p className={styles.desc}>
    Our program is about competitive programming focused
    on problem solving.
</p>
   <h2 className={styles.header2}> 
    Meet the team
   </h2>


   <p className={styles.desc}>
Hunter Moore</p> 
<p className={styles.desc}>Brayan Gomez</p>
<p className={styles.desc}>John Dyer</p>
<p className={styles.desc}>Chris Kelso
</p>
</div>


 </>   
)
}

export default about