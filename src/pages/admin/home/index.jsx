import React from 'react'
import Button from "../../../components/Button"
import {useRouter} from 'next/router'
import styles from "../../../styles/Home.module.css"

const Home = () => {
    const router = useRouter();
    const handleGoPostThreads = () => {
        router.push("./postThreads");
    }
    const handleGoPostExperiences = () => {
        router.push("./postExperience");
    }
  return (
    <>
    <div className={styles["center"]}>
    <div className={styles["marginTop30"]}>管理者画面</div>
    <div className={styles["marginTop100"]}>
      <div className={styles["marginBottom30"]}>
        <Button onClick={handleGoPostThreads}>インターン入力</Button>
      </div>
      <div>
        <Button onClick={handleGoPostExperiences}>体験・感想入力</Button>
      </div>
    </div>
    </div>
    </>
  )
}

export default Home;