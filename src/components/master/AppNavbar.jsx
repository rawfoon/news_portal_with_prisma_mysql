"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaMagnifyingGlass, FaSearchengin, FaTwitter, FaYoutube } from "react-icons/fa6";

const AppNavbar = (props) => {


    let [keyword,SetKeyword] = useState("")
    // console.log(props.data['socials'][0]
    // );




    const NavClick = () => {
        // open
        const burger = document.querySelectorAll('.navbar-burger');
        const menu = document.querySelectorAll('.navbar-menu');

        if (burger.length && menu.length) {
            for (var i = 0; i < burger.length; i++) {
                burger[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        // close
        const close = document.querySelectorAll('.navbar-close');
        const backdrop = document.querySelectorAll('.navbar-backdrop');

        if (close.length) {
            for (var i = 0; i < close.length; i++) {
                close[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }

        if (backdrop.length) {
            for (var i = 0; i < backdrop.length; i++) {
                backdrop[i].addEventListener('click', function() {
                    for (var j = 0; j < menu.length; j++) {
                        menu[j].classList.toggle('hidden');
                    }
                });
            }
        }
    }

    const current=usePathname();

console.log(new Date().getDay());



    return (

        <div className=" sticky top-4 z-20">



<div className="py-2 bg-dark text-white container  mx-[5%]">
                <div className="mx-auto">
                    <div className=" flex justify-between">
                        <div className="col-md-4">
                            <h6><i className=""></i>  Today:<span> {new Date().getDate()}/{new Date().getMonth()+1}/{new Date().getFullYear()} </span></h6>
                        </div>
                        <div className="">
                            <span className="flex">
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['facebook']}><FaFacebook className='mx-2' /></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['youtube']}><FaYoutube className='mx-2'/></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['twitter']} ><FaTwitter className='mx-2'/></a>
                            <a target="_blank" className="text-white" href={props.data['socials'][0]['linkedin']} ><FaLinkedin className='mx-2'/></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>








 






        <nav className="  bg-transparent  text-black flex justify-between mx-[5%] mt-10">
            <div>
                <a href="/" className=" text-xl font-bold">Design<span className="text-orange-500">AGENCY</span></a>
            </div>
            <div className='lg:hidden'>
                <button onClick={()=>{NavClick()}} className='navbar-burger flex items-center text-green-600 p-3'>
                    <svg className='block h-4 w-4 fill-current' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                        <title>Mobile menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div className="z-20 hidden lg:flex  ">
                <ul className="flex flex-wrap">
                    <li>
                    <Link className={current==="/"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-black hover:text-green-500 hover:underline "} href={"/"}>Home</Link>
                    </li>

                    {
                               props.data['categories'].map((item,i)=>{
                                   return <Link key={i} className={current==="/team"?"text-base mx-1 md:mx-4 text-green-600 font-bold":"text-base mx-1 md:mx-4 text-white hover:text-green-500 hover:underline "}  href={`/category?id=${item['id']}`} >{item['name']}</Link>
                               })
                            }

                                
                            </ul>
                            <div className=' flex'>

                <div className="flex   h-10 ">
                            <div className=" border border-slate-600 rounded-[10px] px-0">
                                <input onChange={(e)=>{SetKeyword(e.target.value)}} type="text" className="form-control  h-full" placeholder=" Search..."/>
                                <Link href={keyword===""?("/"):(`/search?keyword=${keyword}`)} className="btn btn-danger" type="button"></Link>
                            </div>
                        </div>
                   
                        {/* mx-3 px-8 py-3 font-semibold rounded text-black border-[1px] rounded-[10px] border-green-400  */}
                    <div className='h-8'>


                    <Link className={"mx-3  px-8 py-2 font-semibold rounded bg-orange-400 text-black border-[1px] rounded-[10px] border-green-400"} href={"/login"}>Login</Link>
                    </div>
                    <div className='h-8'>

                    
                    <Link className={" px-8 py-2 font-semibold rounded text-white bg-green-400 "} href={"/signup"}>SignUp</Link>
                    </div>
                   
                </div>
            </div>
        </nav>









        <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div onClick={()=>{NavClick()}} className='navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto'>
                <div className='flex items-center mb-8'>
                    <a className='mr-auto text-3xl font-bold leading-none' href='#'>
                        <img className='h-10' src='atis-assets/logo/atis/atis-mono-black.svg' alt='' width='auto'/>
                    </a>
                    <button onClick={()=>{NavClick()}} className='navbar-close'>
                        <svg className='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12'/>
                        </svg>
                    </button>
                </div>
                <div>
                    <ul>
                        <li className='mb-1'>
                            <Link className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded' href={'/'}>Home</Link>
                        </li>
                        {
                               props.data['categories'].map((item,i)=>{
                                   return <Link key={i} className='block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded'  href={`/category?id=${item['id']}`} >{item['name']}</Link>
                               })
                            }
                       
                        
                    </ul>
                    <div className="flex ms-3">
                            <div className=" border border-b-slate-600 rounded-[10px] p-3">
                                <input onChange={(e)=>{SetKeyword(e.target.value)}} type="text" className="form-control" placeholder="Search..."/>
                                <Link href={keyword===""?("/"):(`/search?keyword=${keyword}`)} className="btn btn-danger" type="button"><i className="bi bi-search"></i></Link>
                            </div>
                        </div>
                    <div className="mt-4">

                    <Link className={"mx-3 px-6 py-2 font-semibold rounded text-black border-[1px] rounded-[10px] border-green-400 "} href={"/login"}>Login</Link>
                    
                    <Link className={" px-6 py-2 font-semibold rounded text-white bg-green-400 "} href={"/signup"}>Sign Up</Link>
                    </div>
                    
                </div>
            </nav>
        </div>
    </div>




    );
};

export default AppNavbar;