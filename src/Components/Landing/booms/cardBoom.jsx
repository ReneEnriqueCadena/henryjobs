import React,{useState} from 'react';
import Booms from './booms';
import Testimony from './testimony';
import { Slider,CardDiv,ContCard,Card,ArrowLeft, ArrowRight } from '../LandingStyles/landing';
import Starting from './starting';
import Arrow from '../../images/Arrow/atras.png';

export default function Carousel(){
	const [current,setCurrent]=useState(0);
	const arrComp=[<Starting/> ,<Booms/>,<Testimony/>];
	const length=arrComp.length;

	const nextComponent=()=>{
		setCurrent(current===length -1 ? 0: current+1);
	}

	const prevComponent=()=>{
		setCurrent(current === 0 ? length -1 : current -1);
	}

	if(!Array.isArray(arrComp) || arrComp.length <=0){
		return null
	}

 return(
	<Slider >
		<ArrowLeft src={Arrow} onClick={prevComponent}/>
		
		
		
		<ContCard>
		{
			arrComp.map((el , index)=> {
				return(
					<CardDiv className={index === current ? 'slide active' : 'slide'} key={index}>
					{ index === current &&(
						<Card>{el}</Card>
						)
					}
					</CardDiv>
					)
				}
				)
				
			}
					</ContCard>
		
			<ArrowRight src={Arrow} onClick={nextComponent}/>
	</Slider>
 )
}