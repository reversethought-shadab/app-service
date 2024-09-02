interface ServicesType {
  id: number;
  slug: string;
  section1: Section1;
  section2: Section2;
  section3: Section3;
  section4: Section4;
  section5: Section5[];
  section6: Section6;
  benifitsAndroid: BenefitsAndroid;
  processAndroid: Process;
  processIOS: Process;
}

interface Section1 {
  title: string;
  services: Section1Item[];
}

interface Section1Item {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface Section2 {
  title: string;
  subTitle: string;
  description: string;
  image: string;
}

interface Section3 {
  title: string;
  description: string;
  stepsCard: StepsCard[];
}

interface StepsCard {
  id: number;
  type: string;
  title: string;
  description: string;
}

interface Section4 {
  title: string;
  subTitle: string;
  description: string;
  sliderData: SliderData[];
}

interface SliderData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

interface Section5 {
  id: number;
  title: string;
  description: string;
  link: string;
  icon: string;
}

interface Section6 {
  subTitle: string;
  title: string;
  description: string;
  cardsData: CardsData[];
}

interface CardsData {
  id: number;
  title: string;
  description: string;
  link: string;
}

interface BenefitsAndroid {
  title: string;
  subTitle: string;
  benifitsTitle: BenefitTitle[];
  benifitsCard: BenefitsCard[];
}

interface BenefitTitle {
  id: string;
  type: string;
  icon: string;
}

interface BenefitsCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Process {
  subTitle: string;
  title: string;
  image: string;
  processCard: ProcessCard[];
}

interface ProcessCard {
  id: string;
  number: string;
  description: string;
}

export default ServicesType;
