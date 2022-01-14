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

    static #setUser = (res: AxiosResponse) => {
        localStorage.setItem("token", res.data.user.token);
        delete res.data.user.token;
        delete res.data.user.notes;
        localStorage.setItem("user", JSON.stringify(res.data.user));
    }

    static login = async (data: LoginData): Promise<any | AxiosResponse> => {
        try {
            const res = await axios.post('/auth/signin', {...data})                
            if (res.data.user.token) {
                this.#setUser(res);
            }
            return res.status === 200;
        } catch (e) {
            console.error(e);
            return false;
            
        }
    }

    static logout = async () => {
        localStorage.removeItem("user");
    }
    
    static register = async (data: SignupData): Promise<any | AxiosResponse> => {
        try {
            const res = await axios.post('/auth/signup', {...data})
            if (res.data.user.token) {
                this.#setUser(res);
            }
            return res.status === 201;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    static googleAuth = async (tokenId: string): Promise<any | AxiosResponse> => {
        try {
            const res = await axios.post('/auth/google', {token_id: tokenId})
            if (res.data.user.token) {
                this.#setUser(res);
            }
            return res.status === 200 || res.status === 201;
        } catch (e) {
            console.error(e);
            return false;
        }
    }

    static getCurrentUser = () => {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

}

export default AuthService;