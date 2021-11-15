import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
if (props.users.length === 0) {
    props.setUsers(
        [
            {
                id: '1',
                photoUrl: 'https://st3.depositphotos.com/2419757/16439/v/600/depositphotos_164399218-stock-illustration-young-woman-private-avatar-icon.jpg',
                followed: false,
                fullName: 'Sasha',
                status: 'i am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            }, {
            id: '2',
            photoUrl: 'https://st3.depositphotos.com/2419757/16439/v/600/depositphotos_164399218-stock-illustration-young-woman-private-avatar-icon.jpg',
            followed: true,
            fullName: 'Vasya',
            status: 'i am a boss',
            location: {city: 'Moscow', country: 'Russia'}
        }, {
            id: '3',
            photoUrl: 'https://st3.depositphotos.com/2419757/16439/v/600/depositphotos_164399218-stock-illustration-young-woman-private-avatar-icon.jpg',
            followed: false,
            fullName: 'Petya',
            status: 'i am a boss',
            location: {city: 'Kyiv', country: 'Ukraine'}
        },


        ]
    )
}

    return (
        props.users.map(u => <div className={s.users} key={u.id}>
            <div className={s.img}>
                <img src={u.photoUrl} alt=""/>
            </div>
            <div className={s.button}>
            {u.followed ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> : <button onClick={ () => {props.follow(u.id)} }>Follow</button>}
            </div>
            <div className={s.userInfo}>
                <div className={s.fullName}>{u.fullName}</div>
                <div className={s.status}>{u.status}</div>
                <div className={s.locationCountry}>{u.location.country}, <br/> {u.location.city}</div>
            </div>
        </div>)
    )
}


export default Users;