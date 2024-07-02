import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../firebase/FirebaseConfig';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const resetPassword = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (email === "") {
            return toast.error("Email is required");
        }

        try {
            await sendPasswordResetEmail(auth, email);
            toast.success("Password reset email sent");
            setEmail("");
        } catch (error) {
            console.error("Error sending password reset email:", error);
            if (error.code === 'auth/invalid-email') {
                toast.error("Invalid email address");
            } else if (error.code === 'auth/user-not-found') {
                toast.error("No user found with this email");
            } else {
                toast.error("Failed to send password reset email");
            }
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <div>
                    <h1 className='text-center text-green text-xl mb-4 font-bold'>Forgot Password</h1>
                </div>
                <form onSubmit={resetPassword}>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Email'
                            required
                        />
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            type="submit"
                            className='bg-red-500 w-full text-white font-bold px-2 py-2 rounded-lg'>
                            Reset Password
                        </button>
                    </div>
                </form>
                <div>
                    <h2 className='text-white'>
                        Remember your password? <Link className='text-red-500 font-bold' to={'/login'}>Login</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
