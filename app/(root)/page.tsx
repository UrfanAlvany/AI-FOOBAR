import React from 'react';
import {bannerItems, navLinks} from "@/constants";
import Image from "next/image";
import About from "@/components/shared/about";

const Home = () => {

    return (
        <>
      <section className="home">
          <h1 className="home-heading">
              Empowering your coding journey adaptive AI technology
          </h1>
          <ul className="flex-center w-full gap-20">
              {bannerItems.slice(0, 5).map((link) => (
                  <div key={link.label} className="flex-center flex-col gap-2">
                      <li className="flex-center w-fit rounded-full bg-white p-4">
                          <Image src={link.icon} alt="image" width={24} height={24} />
                      </li>
                      <p className="p-14-medium text-center text-white">{link.label}</p>
                  </div>
                  ))}
          </ul>
      </section>

        <section className="sm:mt-12">
            <About/>
        </section>
    </>
    );
};

export default Home;

