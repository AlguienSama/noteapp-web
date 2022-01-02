import React from "react";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import AuthService, { SignupData } from "../services/Auth";


function Register() {
    const { register, handleSubmit } = useForm();
    const {t} = useTranslation();

    const onSubmit = handleSubmit(async (data) => {

        if (data.password !== data.repeatPassword) {
            return;
        }

        const userData: SignupData = {
            nickname: data.nickname,
            email: data.email,
            password: data.password
        }
        AuthService.register(userData).then(() => {
            // Redirect
        })
        
    });

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <label>{t('form.nickname')}</label>
                <input type="text" {...register('nickname', {
                    required: true, minLength: 4, maxLength: 25
                })} />
                <label>{t('form.email')}</label>
                <input type="email" {...register('email', {
                    required: true, minLength: 4, maxLength: 25
                })} />
                <label>{t('form.password')}</label>
                <input type="password" {...register('password', {
                    required: true, minLength: 4, maxLength: 25
                })} />
                <label>{t('form.repeatPassword')}</label>
                <input type="password" {...register('repeatPassword', {
                    required: true, minLength: 4, maxLength: 25
                })} />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}

export default Register;