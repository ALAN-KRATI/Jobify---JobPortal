import React from 'react';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div className="flex items-center justify-center max-w-6xl mx-auto my-10">
            <form onSubmit={submitHandler} className='w-1/2 p-6 bg-white bg-opacity-80 rounded-md my-10 shadow-md shadow-gray-400'>
                <h1 className='font-bold text-2xl text-center text-c1'>Welcome Back!</h1>

                <div className='my-2'>
                    <Label className='font-bold'>Email Address</Label>
                    <Input
                        type='email'
                        value={input.email}
                        name='email'
                        onChange={changeEventHandler}
                        placeholder='Enter your Email'
                    />
                </div>

                <div className='my-2'>
                    <Label className='font-bold'>Password</Label>
                    <Input
                        type='password'
                        value={input.password}
                        name='password'
                        onChange={changeEventHandler}
                        placeholder='Enter the password'
                    />
                </div>

                <div className='my-2 flex items-center justify-between'>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center space-x-2">
                            <Input
                                type='radio' name='role' value='student' checked={input.role === 'student'} onChange={changeEventHandler} className='cursor-pointer'
                            />
                            <Label className='font-bold'>Student</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Input
                                type='radio' name='role' value='recruiter' checked={input.role === 'recruiter'} onChange={changeEventHandler} className='cursor-pointer'
                            />
                            <Label className='font-bold'>Recruiter</Label>
                        </div>
                    </div>
                </div>

                <Button type='submit' className='w-full my-4 bg-c1 hover:bg-c2'>Login</Button>
                <span className='text-sm'>Don't have an account? 
                    <Link to='/signup' className='mx-4 text-c2'>Sign up</Link>
                </span>
            </form>
        </div>
    )
}

export default Login;