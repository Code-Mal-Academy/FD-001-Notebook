import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Payload = {
    username: string,
    email: string,
    password: string
}


const Register = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { mutate } = useMutation({
        mutationKey: ["register"],
        mutationFn: async (data: Payload) => {
            await axios.post("/api/auth/register", data)
        },
        onSuccess: () => navigate("/login")
    })


    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        mutate({ email, password, username })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">Register</h2>
                <form onSubmit={handleRegister} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 sm:text-sm"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
