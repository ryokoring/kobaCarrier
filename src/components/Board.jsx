import React from "react";
import styles from "./Board.module.css";
import Button from "../components/Button";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";

const Board = ({ data }) => {
  console.log("data",data)
  const [isModalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!isModalOpen);
  const router = useRouter();
  const handleDetermine = () => {
    router.push("/admin/home");
  };
  useEffect(() => {
    const scrollAnimationFunc = () => {
      // CSSモジュールのクラス名を適切に取得
      const scrollAnimationElm = document.querySelectorAll(
        `.${styles.scroll_up}`
      );
      for (let i = 0; i < scrollAnimationElm.length; i++) {
        const triggerMargin = 100;
        if (
          window.innerHeight >
          scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin
        ) {
          scrollAnimationElm[i].classList.add(styles.on);
        }
      }
    };

    // イベントリスナーを追加
    window.addEventListener("load", scrollAnimationFunc);
    window.addEventListener("scroll", scrollAnimationFunc);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("load", scrollAnimationFunc);
      window.removeEventListener("scroll", scrollAnimationFunc);
    };
  }, []);

  return (
    <div className={styles["scroll_up"]}>
      <div className={styles["container"]}>
        <div className={styles["name"]}>{data.company}</div>
        <div className={styles["subcontainer"]}>
          <div className={styles["title"]}>{data.title}</div>

          <table className={styles["table"]}>
            <thead>
              <tr>
                <th>平均年収</th>
                <th>開催時期</th>
                <th>選考</th>
                <th>締切</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.salary}</td>
                <td>{data.period}</td>
                <td>{data.select}</td>
                <td>{data.deadline}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles["button-align"]}>
          <Button onClick={toggleModal}>詳細</Button>
          <Modal isOpened={isModalOpen} toggleModal={toggleModal}>
            <div>
              <div>{}</div>
            </div>
          </Modal>

          <Button onClick={handleDetermine}>応募する</Button>
        </div>
      </div>
    </div>
  );
};

export default Board;
