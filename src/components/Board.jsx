import React from 'react';
import styles from "./Board.module.css";
import Button from '../components/Button';
import { useRouter } from "next/router";

const Board = ({data}) => {
    const router = useRouter();
    const handleDetermine = () => {
        router.push("/admin/home");
    }
    return (
        <div className={styles["container"]}>
            <div className={styles["name"]}>NEC</div>
            <div className={styles["subcontainer"]}>
                <div className={styles["title"]}>ネットワークの構築を一緒にやってみようじゃないか！</div>

        <table className={styles["table"]}>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
            </div>
            <div className={styles["center"]}>
            <Button onClick={handleDetermine}>応募する</Button>
            </div>
        </div>
      );
    };


export default Board;