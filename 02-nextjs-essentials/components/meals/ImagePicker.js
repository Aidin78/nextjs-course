'use client';

import { useRef, useState } from 'react';
import classes from './ImagePicker.module.css'

export default function ImagePicker({ label, name }) {
    const [pickedImage, setPickedImage] = useState('');

    const imageInput = useRef();
    function handlePickImage() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) return;

        const fileReader = new FileReader();
        fileReader.onload = () => {
            // console.log("fileReader.result", fileReader.result);
            setPickedImage(fileReader.result)
        };
        fileReader.readAsDataURL(file);
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image is picked yet.</p>}
                    {pickedImage && (
                        <img
                            src={pickedImage}
                            alt="Picked Image"
                            style={{ width: '100%', height: '100%' }}
                        />
                    )}
                </div>
                <input
                    ref={imageInput}
                    className={classes.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpeg'
                    onChange={handleImageChange}
                    name={name} />
                <button className={classes.button} type='button' onClick={handlePickImage}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}