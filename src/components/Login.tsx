import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import AuthService, {LoginData} from "../services/Auth";

function Login() {
    const { register, handleSubmit } = useForm();
    const {t} = useTranslation();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (data) => {
        const userData: LoginData = {
            email: data.email,
            password: data.password
        }
        const isLogged = await AuthService.login(userData);

        if (isLogged) { navigate('/'); window.location.reload(); }
        else { console.log('error'); }
        
    });

    return (
        <form onSubmit={onSubmit}>
            <label>{t('form.email')}</label>
            <input type="email" {...register('email', {
                required: true, minLength: 4, maxLength: 25
            })} />
            <label>{t('form.password')}</label>
            <input type="password" {...register('password', {
                required: true, minLength: 4, maxLength: 25
            })} />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login;