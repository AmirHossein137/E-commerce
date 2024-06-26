'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@nextui-org/button'
import { useForm } from 'react-hook-form'


const Login = () => {
  const [stepLogin, setStepLogin] = useState('login')


  const form = useForm();
  const { register, handleSubmit, formState: { errors } } = form;

  const handleLogin = (data) => {
    console.log(data)
  }

  const handleRegister = (data) => {
    console.log(data)
  }


  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-1/3 shadow-lg gap-5 p-5 flex flex-col rounded-xl'>
        <div className='flex items-center justify-center'>
          <Image src='./images/logo.svg' width={150} height={150} />
        </div>
        {stepLogin === 'login' ?
          <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>نام کاربری</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder='نام کاربری خود را وارد نمایید'
                type='text'
                {...register('username', { required: "نام کاربری الزامی است" })}
              />
              <p className='text-xs text-rose-600 pt-1'>{errors.username?.message}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>رمز عبور</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder=' رمز عبور خود را وارد نمایید'
                type='text'
                {...register('password', { required: " رمز عبور الزامی است" })}
              />
              <p className='text-xs text-rose-600 pt-1'>{errors.password?.message}</p>
            </div>
            <span onClick={() => setStepLogin('register')} className='text-sm text-gray-400 font-medium cursor-pointer'>اگر ثبت نام نکرده اید کلیک کنید</span>
            <Button type='submit' size='lg' className='bg-rose-600 text-white'>ورود</Button>
          </form>
          :
          <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>نام کاربری</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder='نام کاربری خود را وارد نمایید'
                type='text'
                {...register('username')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>ایمیل</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder=' ایمیل خود را وارد نمایید'
                type='email'
                {...register('email')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>موبایل</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder=' شماره تماس را وارد نمایید'
                type='phone'
                {...register('phone')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-gray-600 text-lg pr-3'>رمز عبور</label>
              <input className='border border-gray-200 rounded-md h-11 shadow px-3 outline-rose-400 text-sm'
                placeholder=' رمز عبور خود را وارد نمایید'
                type='text'
                {...register('password')}
              />
            </div>
            <Button type='submit' size='lg' className='bg-rose-600 text-white'>ثبت نام</Button>
          </form>
        }
      </div>
    </div>
  )
}

export default Login