import { useState } from 'react'

import {
    ref,
    uploadBytesResumable
} from "firebase/storage";
import storage from '../../service/firebase'

import addIcon from '../../icons/add-icon.svg'
import './Vault.css'

const Vault = () => {
    const [percent, setPercent] = useState(0);

    const handleChange = (event) => {
        const file = event.target.files[0]

        if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {

            }
        );
    }
    return (
        <div className="vault">
            <div className="vault__container">
                <div className="vault__addButton" >
                    <input type='file' accept="/image/*" onChange={e => handleChange(e)} />
                    <img src={addIcon} alt="add document" />
                    <p>Add Document</p>
                    {percent !== 0 && `${percent} % done`}
                </div>
            </div>
        </div>
    )
}

export default Vault
