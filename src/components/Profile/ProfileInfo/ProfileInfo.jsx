import React from 'react';
import s from './ProfileInfo.module.css';
import {NavLink} from "react-router-dom";

const ProfileInfo = () => {
    return (
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}
export default ProfileInfo;