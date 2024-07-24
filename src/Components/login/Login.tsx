'use client'
import { useEffect, useState } from 'react';
import { ValidateLogin } from './validateLogin'; 
import { LoginFormErrors, LoginForm } from './loginInterfaces'; 
import { useRouter } from 'next/navigation';/* 
import { useAuth } from '@/Components/authContext';
import Swal from 'sweetalert2';
import { loginUser } from '@/services/services'; */

const LoginFormClient: React.FC = () => {
    const router = useRouter();/* 
    const { setToken, setUserData } = useAuth(); */

    const [dataUser, setDataUser] = useState<LoginForm>({
        email: "",
        password: ""
    });

    const [errorMessage, setErrorMessage] = useState<LoginFormErrors>({
        email: "",
        password: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataUser({
            ...dataUser,
            [event.target.name]: event.target.value
        });
    };

    const handleLogin = async () => {
        /*try { 
            const result = await loginUser(dataUser);

            if (result.login) {
                Swal.fire({
                    icon: 'success',
                    title: 'Inicio de sesión exitoso',
                    showConfirmButton: false,
                    timer: 1500
                });

                setToken(result.token);
                setUserData(result.user);

                router.push(`/User/${result.user.id}/dashboard`);
            } else {
                setErrorMessage({
                    email: "Las credenciales son incorrectas.",
                    password: ""
                });
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);

            if (error instanceof Error) {
                if (error.message === 'User not found') {
                    setErrorMessage({
                        email: 'User not found.',
                        password: ''
                    });
                } else if (error.message === 'Invalid password') {
                    setErrorMessage({
                        email: '',
                        password: 'Invalid password.'
                    });
                } else {
                    setErrorMessage({
                        email: 'Hubo un problema durante el inicio de sesión.',
                        password: ''
                    });
                }
            } else {
                setErrorMessage({
                    email: 'Hubo un problema durante el inicio de sesión.',
                    password: ''
                });
            }
        } */
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin();
    };

    useEffect(() => {
        const errors = ValidateLogin(dataUser);
        setErrorMessage(errors);
    }, [dataUser]);


    return (
        <div className="text-black flex items-center justify-center p-10 ml-6">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-black">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                            value={dataUser.email}
                        />
                        {errorMessage.email && <p className="text-red-500 text-xs mt-2">{errorMessage.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleChange}
                            value={dataUser.password}
                        />
                        {errorMessage.password && <p className="text-red-500 text-xs mt-2">{errorMessage.password}</p>}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginFormClient;
