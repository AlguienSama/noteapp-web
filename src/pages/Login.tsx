import React from "react";
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import AuthService, {LoginData} from "../services/Auth";

function Login() {
    const { register, handleSubmit } = useForm();
    const {t} = useTranslation();

    const onSubmit = handleSubmit(async (data) => {
        console.log('submit');
        
        const userData: LoginData = {
            email: data.email,
            password: data.password
        }
        AuthService.login(userData).then(() => {
            // Redirect
        })
        
    });

    return (
        <div className="container">
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
        </div>
    )
}

export default Login;