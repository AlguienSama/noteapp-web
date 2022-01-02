import axios, { AxiosResponse } from 'axios';

export type LoginData = {
    email: string;
    password: string;
}
export type SignupData = {
    nickname: string;
    email: string;
    password: string;
}

class AuthService {

    private authHeader = () => {
        const token = localStorage.getItem("token");
        return token ? 
            {
                'Authorization': token
            } : {};
    }

    static login = async (data: LoginData): Promise<any | AxiosResponse> => {
        axios.post('/auth/signin', {...data})
            .then(res => {
                if (res.data.user.token) {
                    localStorage.setItem("token", res.data.user.token);
                    delete res.data.user.token;
                    delete res.data.user.notes;
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                }
                return res.status === 201;
            })
            .catch(err => {
                console.error(err);
                return false;
            });
    }

    static logout = async () => {
        localStorage.removeItem("token");
    }
    
    static register = async (data: SignupData): Promise<any | AxiosResponse> => {
        axios.post('/auth/signup', {...data})
            .then(res => {
                return res;
            })
            .catch(err => {
                return err;
            });
    }

    static getCurrentUser = () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

}

export default AuthService;