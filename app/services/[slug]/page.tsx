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
      <AppDevelopment data={serviceData}/>
      <AndroidDevelopment data={serviceData}/>
      <Process data={serviceData}/>
      <SuccessStory data={serviceData}/>
      {/* <Cta data={serviceData}/> */}
      {/* <IosDevlopment data={serviceData}/> */}
      {/* <Benefits data={serviceData}/> */}
      {/* <Stages data={serviceData}/> */}
    </div>
    )
}

export default page
