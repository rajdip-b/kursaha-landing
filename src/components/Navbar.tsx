import React, { FC } from 'react';
import { docs, github, signin } from '../assets';

const navItems = [
    {
        name: 'Sign In',
        image: signin,
    },
    {
        name: 'Docs',
        image: docs,
    },
    {
        name: 'GitHub',
        image: github,
    },
];

const Navbar: FC = () => {
    return (
        <div
            className={
                'flex flex-row-reverse bg-[#171A21] text-white-secondary fixed top-0 w-screen px-5 py-3 gap-5 md:gap-20 z-10'
            }
        >
            {navItems.map((item, index) => {
                return (
                    <div className={'flex flex-row gap-1 items-center'}>
                        <img alt={''} src={item.image} className={'h-5 w-5'} />
                        <p className={'text-sm'}>{item.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Navbar;
