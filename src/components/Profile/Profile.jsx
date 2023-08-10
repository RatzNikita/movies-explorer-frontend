import './Profile.css'
import {Header} from "../Header/Header";
import React from "react";

export const Profile = () => {

    return (
        <>
            <Header/>
            <section className='profile'>
                <h2 className='profile__greeting'>Привет, Никита</h2>
                <div className='profile__text-container'>
                    <p className='profile__text'>Имя</p>
                    <p className='profile__text'>Никита</p>
                </div>
                <div className='divider_color_grey profile__divider'></div>
                <div className='profile__text-container'>
                    <p className='profile__text'>E-mail</p>
                    <p className='profile__text'>ratz.nikita@yandex.ru</p>
                </div>
                <div className='profile__buttons-container'>
                    <button className='profile__button'>Редактировать</button>
                    <button className='profile__button profile__button_color_red'>Выйти из аккаунта</button>
                </div>
            </section>
        </>
    )
}

