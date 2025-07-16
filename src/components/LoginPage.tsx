import React, { useState } from 'react';
import { UserIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react';
import { ThreeScene } from './ThreeScene';
export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email);
  };
  return <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="relative h-[30vh]">
        <ThreeScene />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div className="flex-1 flex justify-center items-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <span className="text-[#9FEF00] font-bold text-2xl">TECH</span>
              <span className="ml-2 text-[#9FEF00] bg-[#9FEF00]/10 px-2 py-1 rounded text-xs">
                NEXUS
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-gray-400 mt-2">Sign in to your account</p>
          </div>
          <div className="bg-gray-900 border border-[#9FEF00]/20 rounded-lg p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="bg-black border border-gray-700 text-white rounded-md block w-full pl-10 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon className="h-5 w-5 text-gray-500" />
                  </div>
                  <input id="password" type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} className="bg-black border border-gray-700 text-white rounded-md block w-full pl-10 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-[#9FEF00]/50 focus:border-transparent" placeholder="••••••••" required />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 hover:text-gray-400 focus:outline-none">
                      {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="h-4 w-4 border border-gray-700 rounded bg-black focus:ring-[#9FEF00]" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-400">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm text-[#9FEF00] hover:text-[#9FEF00]/80">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="w-full bg-[#9FEF00] text-black font-medium py-2 px-4 rounded-md hover:bg-[#9FEF00]/80 transition-colors">
                Sign In
              </button>
            </form>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                Don't have an account?{' '}
                <a href="#" className="text-[#9FEF00] hover:text-[#9FEF00]/80">
                  Create one
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}