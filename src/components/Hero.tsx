import React, { FC } from 'react';
import { hero, logo } from '../assets';
import Button from './Button';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Hero: FC = () => {
    return (
        <div className={'w-screen min-h-screen pt-[70px]'}>
            <div className={'flex flex-col gap-20 w-[85%] mx-auto'}>
                <div className={'flex justify-between items-center gap-10 md:px-10'}>
                    <img src={logo} alt={''} />
                    <Button className={'p-3'}>Talk to us</Button>
                </div>
                <div className={'px-10 flex flex-col gap-10 items-center justify-center'}>
                    <AnimationOnScroll
                        animateIn={'animate__fadeInDown'}
                        animateOnce
                        className={'md:text-6xl text-4xl font-bold text-white-primary text-center md:w-[50%]'}
                    >
                        Grow your Business with Email Automation
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn={'animate__fadeIn'} animateOnce delay={400}>
                        <img src={hero} alt={''} />
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn={'animate__fadeInUp'} animateOnce delay={800}>
                        <Button className={'p-5'}>Get Started</Button>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default Hero;
