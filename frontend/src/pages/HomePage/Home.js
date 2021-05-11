import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';
import { Navbar ,Footer} from '../../components'



const Home = () => {
    return (
        <>
           <Navbar/>
           <InforSection {...homeObjOne} />
           <InforSection {...homeObjTwo} />
           <InforSection {...homeObjThree} />
           <Footer/>
        </>
    );
};

export default Home;