import styles from '../styles/Home.module.css'
import {Button, Header} from 'shared';
export default function Home() {
  const handleClickButton = () => {
    console.log('Clicked Main App');
  }
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>Main App !</h1>
        <Button onClick={handleClickButton}>Main Button</Button>
      </main>
    </div>
  )
}
