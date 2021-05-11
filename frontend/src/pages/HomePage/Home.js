import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';
import { InforSection2 } from '../../components';
import { Navbar ,Footer} from '../../components'



const Home = () => {
    return (
        <>
           <Navbar/>
           <InforSection {...homeObjOne} />
           <InforSection2 {...homeObjTwo} />
           <InforSection2 {...homeObjThree} />
           <Footer/>
        </>
    );
};

export default Home;