"use client";
import { useRef, useState } from "react";
import Image from "next/image";

import styles from "./image-picker.module.css";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInput = useRef(null);

  const handleChange = (event) => {
    const imageFile = event.target.files[0];
    if (!imageFile) {
      return setPickedImage(null);
    }
    const reader = new FileReader();
    reader.onload = () => setPickedImage(reader.result);
    reader.readAsDataURL(imageFile);
  };

  const handleClick = () => {
    imageInput.current.click();
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image selected!</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="File selected by the user" fill />
          )}
        </div>
        <input
          id={name}
          type="file"
          accept="image/jpeg, image/png"
          className={styles.input}
          name={name}
          ref={imageInput}
          onChange={handleChange}
          required
        />
        <button type="button" className={styles.button} onClick={handleClick}>
          Pick and Image
        </button>
      </div>
    </div>
  );
};

export { ImagePicker };
