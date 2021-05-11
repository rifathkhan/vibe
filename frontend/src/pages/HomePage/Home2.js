import React from 'react';
import { homeObjFour, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';
import { InforSection2 } from '../../components';
import { Navbar ,Footer} from '../../components';


const Home2 = () => {
    return (
        <>
           <Navbar/>
           <InforSection {...homeObjFour} />
           <InforSection2 {...homeObjTwo} />
           <InforSection2 {...homeObjThree} />
           <Footer/>
        </>
    );
};

export default Home2;