import React from 'react';
import { homeObjFour, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';
import { InforSection2 } from '../../components';
import { Footer } from '../../components';
import LogOutBtn from './Navbar2';


const Home2 = () => {
    return (
        <>
           <LogOutBtn/>
           <InforSection2 {...homeObjFour} />
           <InforSection {...homeObjTwo} />
           <InforSection {...homeObjThree} />
           <Footer/>
        </>
    );
};

export default Home2;