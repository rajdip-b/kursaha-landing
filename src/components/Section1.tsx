import React from 'react';
import { robot } from '../assets';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const data = [
    {
        title: 'Personalization',
        body: 'The advanced intelligent system assists in reaching out to customers and increasing conversion funnel.',
    },
    {
        title: 'Efficiency',
        body: 'Our data models help improve the content. Real-time delivery insights are monitored using AI and provide meaningful actions.',
    },
    {
        title: 'Automation',
        body: 'Send email at scale using code written in your preferred programming language, such as Python, Java, or Curl.',
    },
];

const Section1 = () => {
    return (
        <div className={'w-screen h-fit bg-black-secondary mb-20 md:p-20 py-20'}>
            <div className={'flex items-center items-end justify-between w-[85%] mx-auto'}>
                <div className={'flex flex-col gap-10 md:w-[50%]'}>
                    <AnimationOnScroll
                        animateIn={'animate__fadeInLeft'}
                        animateOnce
                        className={'text-5xl font-bold text-white-primary'}
                        duration={0.6}
                    >
                        AI <span className={'text-blue'}>framework</span>
                    </AnimationOnScroll>
                    <div className={'flex flex-col gap-16'}>
                        {data.map((item, index) => {
                            return (
                                <AnimationOnScroll
                                    animateOnce
                                    delay={400 * index}
                                    animateIn={'animate__fadeInUp'}
                                    className={'flex flex-col gap-4 border-l-2 border-l-white-secondary pl-8'}
                                >
                                    <div className={'text-3xl font-bold text-white-primary'}>{item.title}</div>
                                    <div className={'text-lg text-white-primary'}>{item.body}</div>
                                </AnimationOnScroll>
                            );
                        })}
                    </div>
                </div>
                <AnimationOnScroll
                    animateIn={'animate__fadeInRight'}
                    animateOnce
                    className={'flex justify-end md:block hidden'}
                >
                    <img src={robot} alt={''} className={'w-[80%] h-[80%]'} />
                </AnimationOnScroll>
            </div>
        </div>
    );
};

export default Section1;
