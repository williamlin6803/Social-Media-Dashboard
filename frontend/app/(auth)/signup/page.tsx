import React, { useState } from 'react';
const axios = require('axios');

export const metadata = {
  title: 'Sign Up - Simple',
  description: 'Page description',
};

import Link from 'next/link';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle sign up form submission, which is invoked when the signup button is called: <form onSubmit={handleSignUp}>
  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sends POST HTTP request to /signup route in the backend with name, email, and password
    try {
      const response = await axios.post('/signup', {
        name,
        email,
        password,
      });

      // Handle successful signup response (e.g., show success message)
      console.log(response.data);
    } catch (error) {
      // Handle signup error (e.g., show error message)
      console.error(error);
    }
  };

  // Rendering sign up form
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          <div className="max-w-2xl mx-auto text-center pb-6 md:pb-6">
            <h1 className="h1">Sign up</h1>
          </div>

          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSignUp}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                  <input
                    id="name"
                    type="text"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input
                    id="email"
                    type="email"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password <span className="text-red-600">*</span></label>
                  <input
                    id="password"
                    type="password"
                    className="form-input w-full text-gray-800"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-orange-100 w-full" type="submit">Sign up</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                By creating an account, you agree to the <a className="underline" href="#0">terms & conditions</a>, and our <a className="underline" href="#0">privacy policy</a>.
              </div>
            </form>
            <div className="text-gray-600 text-center mt-6">
              Already using smdash? <Link href="/signin" className="text-orange-100 hover:underline transition duration-150 ease-in-out">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
