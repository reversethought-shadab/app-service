import Header from '@/components/Header';
import AppDevelopment from '@/components/AppDevelopment';
import { servicesData, AppData } from '../data/services';
import AndroidDevelopment from '@/components/AndroidDevelopment';
import Process from '@/components/Process';
import SuccessStory from '@/components/SuccessStory';

export default function Home() {
  return (
    <div >
      <Header />
      <div className=''>
        <AppDevelopment data={servicesData} />
        <AndroidDevelopment data={AppData[0]} />
        <Process/>
        <SuccessStory/> 
      </div>
    </div>
  );
}