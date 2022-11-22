import React from 'react';
import CatalogItem from './CatalogItem';
import Test from './test';
import './Home.css'

function Home (){

    

    return(
        <div className='home'>
            <div className="intro-home">
                <div className="home-leftSide">
                    <div className="home-title">What is Godictus?</div>
                    <div className="home-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum animi exercitationem deserunt neque temporibus! Molestias iusto quo cum nulla placeat saepe unde velit cumque! Tenetur, ea. Expedita doloremque dolorem unde.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ullam quaerat nulla molestias consequuntur odit ducimus consectetur animi nisi? Itaque commodi, debitis cupiditate nobis dolores inventore omnis aliquam facere.</p>
                    </div>
                </div>
                <div className="home-rightSide">
                    
                </div>
            </div>
            <div className="home-catalog">
                <CatalogItem/>
                {/* <Test/> */}
            </div>
        </div>
    )
}


export default Home;