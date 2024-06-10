"use client";
import { useRef } from "react";
import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef(null);

  const handleClick = () => {
    imageInput.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <input
          id={name}
          type="file"
          accept="image/jpeg, image/png"
          className={styles.input}
          name={name}
          ref={imageInput}
        />
        <button type="button" className={styles.button} onClick={handleClick}>
          Pick and Image
        </button>
      </div>
    </div>
  );
};

export { ImagePicker };
