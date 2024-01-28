import React from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';



async function getData(){
    let socials= (await (await fetch(`${process.env.HOST}/api/social`)).json())['data']
    let categories= (await (await fetch(`${process.env.HOST}/api/category`)).json())['data']
    return {socials:socials,categories:categories}
}


const PlainLayout = async (props) => {

const data = await getData()

    return (
        <div>
            <AppNavbar data={data}/>
            {props.children}
            <Footer data={data}/>
            
        </div>
    );
};

export default PlainLayout;