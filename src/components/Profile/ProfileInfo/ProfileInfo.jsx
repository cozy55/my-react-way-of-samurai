import React from 'react'
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    return (
        <div>
            {/* <div className={s.wallpaper}>
                <img src='https://64.media.tumblr.com/324ebba1048a5158c915a8627083ffbc/tumblr_pgob9qjhFd1wnjxxqo1_1280.png' />
            </div> */}
            <div className = {s.descriptionBlock}>
                <img src = {props.profile.photos.large} />
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
            {/* <img src='https://cdn130.picsart.com/293322299018201.png?type=webp&to=min&r=640' /> */}
            </div>
        </div>
    )
}

export default ProfileInfo;