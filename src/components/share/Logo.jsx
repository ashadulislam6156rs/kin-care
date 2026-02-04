"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
      <Link href={"/"} className=" flex gap-1 items-center">
        <Image
          src={"/assets/kinCare-logo.png"}
          width={27}
          height={27}
          alt="logo"
        />
        <h1 className="text-base font-bold text-accent">
          Kin<span className="text-secondary">Care</span>
        </h1>
      </Link>
    );
};

export default Logo;