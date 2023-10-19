import { useState, FormEvent } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    sendLoginData({ username, password });
};

const sendLoginData = async (data: { username: string; password: string }) => {
    try {
        const response = await axios.post('/api/login', data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
    />
    <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button type="submit">Login</button>
    </form>
);
};

export default LoginForm;
