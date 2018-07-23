import React from 'react';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import {Link} from 'react-router-dom';


const generateBlocks = ({blocks}) => {
    if(blocks){
        return blocks.map((item) => {
            console.log(`${item.type}`)
            return(
                <div className={`item ${item.type}`} key={item.id}>
                    <Reveal effect= "animated fadeInUp">
                        <div className="veil"></div>
                        <div className="image"
                            style={{background: `url(/images/blocks/${item.image}) no-repeat`}}
                        >

                        </div>
                        <div className="link">
                            <Link to={item.link} style={{color: '#fff'}}>{item.title}</Link>
                        </div>
                    </Reveal>
                </div>
            )
        })
    }
}

const Blocks = (props) => {
    return(
        <div className="home_blocks" >
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks