"use client";
import React from 'react'
import { servicesData } from '@/data/services';
import { useParams,useRouter } from 'next/navigation';
import Header from '@/components/Header';
import AppDevelopment from '@/components/AppDevelopment';
import AndroidDevelopment from '@/components/AndroidDevelopment';
import Process from '@/components/Process';
import SuccessStory from '@/components/SuccessStory';
import Cta from '@/components/Cta';
import IosDevlopment from '@/components/IosDevlopment';
import Benefits from '@/components/Benifits';
import Stages from '@/components/Stages';
import Hero from '@/components/Hero';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const page = () => {
    const params = useParams();
    const serviceData = servicesData?.find(
       (service) => service.slug === params.slug
    );


    const router = useRouter();
    if (!serviceData) {
        return router.push("/404-error");
    }
    return (
        <div >
      <Header/>
      <Hero data={serviceData}/>
      <AppDevelopment data={serviceData}/>
      <AndroidDevelopment data={serviceData}/>
      <Process data={serviceData}/>
      <SuccessStory data={serviceData}/>
      <Cta data={serviceData.section5[0]}/>
      {/* <Cta data={serviceData.section5[1]}/> */}
      <IosDevlopment data={serviceData.section6}/>
      <Benefits data={serviceData}/>
      <Stages data={serviceData.processAndroid}/>
      <Contact/>
      <Footer/>
    </div>
    )
}

export default page
