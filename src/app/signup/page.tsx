'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function SignUp() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate network delay
        setTimeout(() => {
            // Get existing users
            const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

            // Check if email already exists
            const userExists = existingUsers.some((user: any) => user.email === formData.email);

            if (userExists) {
                alert('User with this email already exists!');
                setIsLoading(false);
                return;
            }

            // Save new user
            const newUser = { ...formData };
            localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

            // Redirect to interests
            router.push('/interests');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-[#f0f9f8] flex flex-col px-6 py-8">
            <div className="max-w-md w-full mx-auto">

                {/* User Icon */}
                <div className="flex justify-center mb-6 mt-12">
                    <div className="w-[100px] h-[100px] bg-[#17B8A6] rounded-full flex items-center justify-center">
                        <svg className="w-[50px] h-[50px] text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
                    Create Account
                </h1>

                {/* Subtitle */}
                <p className="text-center text-gray-600 text-sm mb-8">
                    Join Gratissé and start discovering free products
                </p>

                <form onSubmit={handleSignUp}>
                    {/* Form */}
                    <div className="space-y-4 mb-6">
                        {/* Full Name Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <input
                                required
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#17B8A6] focus:ring-2 focus:ring-[#17B8A6]/20 transition-all"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#17B8A6] focus:ring-2 focus:ring-[#17B8A6]/20 transition-all"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <input
                                required
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-full text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#17B8A6] focus:ring-2 focus:ring-[#17B8A6]/20 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    {showPassword ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Sign Up Button */}
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-[#17B8A6] text-white text-base font-semibold py-3.5 rounded-full shadow-md hover:shadow-lg hover:bg-[#15a596] transition-all duration-200 mb-6 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                {/* Divider */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-4 bg-[#f0f9f8] text-gray-500">Or continue with</span>
                    </div>
                </div>

                {/* Social Login Buttons */}
                <div className="space-y-3 mb-6">
                    <button
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                        className="w-full bg-white border border-gray-200 text-gray-700 text-base font-medium py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        Continue with Google
                    </button>

                    <button className="w-full bg-white border border-gray-200 text-gray-700 text-base font-medium py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        Continue with Apple
                    </button>
                </div>

                {/* Sign In Link */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                        onClick={() => router.push('/signin')}
                        className="text-[#17B8A6] font-semibold hover:underline cursor-pointer"
                    >
                        Sign In
                    </button>
                </p>

                {/* Divider */}
                <div className="w-full border-t border-gray-200 my-8"></div>

                {/* Mission Section */}
                <div className="text-center pb-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        At Gratissé, we believe in reducing waste and building stronger communities. We connect people with free products they need while helping others declutter and share their unused items. Together, we're making sustainability simple and accessible for everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}
