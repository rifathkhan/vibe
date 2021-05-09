import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree } from './Data';
import { InforSection } from '../../components';
import { InforSection2 } from '../../components';




const Home = () => {
    return (
        <>
           <InforSection {...homeObjOne} />
           <InforSection2 {...homeObjTwo} />
           <InforSection2 {...homeObjThree} />
        </>
    );
};

export default Home;