import axios from 'axios';
import firebase from 'firebase';

export const axiosWithAuth = (uid) => {
    // console.log("AXIOS WITH AUTH")
    // console.log(uid);
    return axios.create({
        headers: {
            'Content-Type': 'application/json',
            'uid': `${uid}`,
        }
    });
};