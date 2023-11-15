import React from 'react';
import { createPortal } from "react-dom";
import styles from './Modal.module.css';
import style from "../styles/Home.module.css"
import Button from "../components/Button"


const Modal = ({ children, isOpened, toggleModal, canCloseByClickingBackground }) => {
    // `isOpened` ステートと `open` 関数は不要なので削除しました

    if (!isOpened) return null; // モーダルが開かれていなければ何も表示しない

    return createPortal(
        <div className={styles.wrapper} onClick={canCloseByClickingBackground ? toggleModal : undefined}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
                <div className={style["center"]}>
                <Button onClick={toggleModal}>閉じる</Button>
                </div>
                
                
            </div>
            <div className={styles.background} />
        </div>,
        document.body
    );
};

Modal.defaultProps = {
    canCloseByClickingBackground: true,
};

export default Modal;

