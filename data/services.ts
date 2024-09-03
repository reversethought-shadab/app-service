import { title } from "process";
import ServicesType from "./servicesType";

export const servicesData = [

  {
    id: 0,
    slug: 'app-development',
    hero:{
      title: 'Mobile App Development Services',
      // image: 'https://jetruby.com/wp-content/webp-express/webp-images/uploads/2023/03/5948e5c89e085dacc493d8f5a99cf1a2-1.jpg.webp',
      description: "Nerasoft leverages modern technologies to deliver scalable and robust mobile app development services to digitize your business. With our app development services, we help SMEs, startups, and enterprise brands create exceptional digital products for seamless user interactions across various platforms.",
      button: "Let's Connect"
    },
    section1: {
      title: 'App development',
      services: [
        {
          id: 1,
          icon: '/images/android.svg',
          title: "Android App Development",
          description: "We provide custom Android development services to build native apps that empower your business and inspire its growth. Enjoy a seamless mobile experience on all supported Android OS versions. Always on time, to specification, and within budget!",
          tags: ['Wear OS', 'Android OS'],
        },
        {
          id: 2,
          icon: '/images/apple.svg',
          title: "iOS App Development",
          description: "We transform our clients' ideas into flawless high-quality iOS mobile applications making businesses stand out from the competition. We always build your iOS app on time, to specification, and within budget.",
          tags: ['tvOS', 'iPhone', 'iPad', 'watchOS'],
        },
      ],
    },
    section2: {
      title: "End-to-End Android App Development",
      subTitle: "ANDROID APP DEVELOPMENT",
      description: "Got an app idea? We can make it true. The wealth of our expertise allows us to create Android apps across industries. Win customers with engaging design and a well-planned user journey.",
      image: "https://jetruby.com/wp-content/webp-express/webp-images/uploads/2023/03/5948e5c89e085dacc493d8f5a99cf1a2-1.jpg.webp",
    },
    section3: {
      title: "ANDROID APP DEVELOPMENT",
      description: "How We Work on \n Your Android App",
      stepsCard: [
        {
          id: 1,
          type: "Step 1",
          title: "Android Consulting",
          description: "First of all, we need to have a clear vision of the app and its future functionality. We obtain an understanding of the product’s advantage as compared to its competitors and determine the end-users' needs.",
        },
        {
          id: 2,
          type: "Step 2",
          title: "Android App UX/UI Design",
          description: "Our team adheres to the best design techniques. As a customer, you can fully expect an adaptive responsive UI design that enhances the customer experience.",
        },
        {
          id: 3,
          type: "Step 3",
          title: "Creating Android App",
          description: "We deliver highly customizable Android app solutions as per your particular requirements. You get the tool to control and streamline business operations effectively.",
        },
        {
          id: 4,
          type: "Step 4",
          title: "Android App Support",
          description: "Post-release maintenance is the time and opportunity to have all bugs noticed and fixed. Support for new OS versions is also included.",
        },
      ],
    },
    section4: {
      title: "Android Development Success Stories",
      subTitle: "Android App Development",
      description: "Here you can read how we created Android apps from scratch or modernized existing apps with new functional features.",
      sliderData: [
        {
          id: 0,
          title: "Moments NFC",
          description: "Moments NFC is a Kotlin-based app that simplifies payments in pubs across the USA. There are two amazing things about this app. First, it allows you to pay for a drink with a mere wave of your hand. Just sync the app with your smartphone or a wristband with an NFC module and you’re ready to do magic! No more waiting to get your credit card payment approved. The second amazing thing is that our team built the entire app in just 12 days. We didn’t even have to create a new interface from scratch. We simply took the iOS app design and used it 'as is' to build the Kotlin app. Doing this saved our client a considerable amount of budget. Ultimately, we helped the client create a unique mobile application for the Android platform that allows pub customers to save time and make their nights out stress-free.",
          tags: ['Read article', 'View case study'],
          image: "https://jetruby.com/wp-content/webp-express/webp-images/uploads/tilda/1001490/pages/6589996/tild3537-6637-4762-b564-643636356166__moments_perview.png.webp",
        },
        {
          id: 1,
          title: "Moments NFC",
          description: "Moments NFC is a Kotlin-based app that simplifies payments in pubs across the USA. There are two amazing things about this app. First, it allows you to pay for a drink with a mere wave of your hand. Just sync the app with your smartphone or a wristband with an NFC module and you’re ready to do magic! No more waiting to get your credit card payment approved. The second amazing thing is that our team built the entire app in just 12 days. We didn’t even have to create a new interface from scratch. We simply took the iOS app design and used it 'as is' to build the Kotlin app. Doing this saved our client a considerable amount of budget. Ultimately, we helped the client create a unique mobile application for the Android platform that allows pub customers to save time and make their nights out stress-free.",
          tags: ['Read article', 'View case study'],
          image: "https://jetruby.com/wp-content/webp-express/webp-images/uploads/tilda/1001490/pages/6589996/tild3537-6637-4762-b564-643636356166__moments_perview.png.webp",
        },
      ],
    },
    section5: [
      {
        id: 0,
        title: "Looking for Android developers to create or scale your app?",
        description: "Fill out the form and we’ll get in touch with you soon.",
        link: "Get a quote",
        icon: "/images/android.svg",
      },
      {
        id: 1,
        title: "Looking for iOS developers to create or scale your app?",
        description: "Fill out the form and we’ll get in touch with you soon.",
        link: "Get a quote",
        icon: "/images/apple.svg",
      },
    ],
    section6: {
      subTitle: "IOS APP DEVELOPMENT",
      title: "Trusted iOS app development services",
      description: "iOS mobile applications are the go-to solutions for most businesses. They are secure and scalable. Something that can take a business ahead of others. We hired world-class iOS developers to design the best mobile app solution that will help you to increase your market reach!",
      cardsData: [
        {
          id: 0,
          title: "Expert iOS App design and development",
          description: "We are proud of our proven methodology applied in app development which guarantees that your project will stay within the timeline, scope, and budget.",
          link: "",
        },
        {
          id: 1,
          title: "iOS UI/UX Design and Development",
          description: "We make iOS applications user-friendly and engaging. All thanks to the UI/UX team, for bringing the best app experiences with the motivation to use it continuously.",
          link: "",
        },
        {
          id: 2,
          title: "iOS mobile applications consulting",
          description: "We will analyze your iOS app project with business and tech analysts to ensure there are no critical problems.",
          link: "",
        },
        {
          id: 3,
          title: "iOS App High Quality Code Audit",
          description: "We hired iOS developers and QA specialists from top agencies to make sure your iOS mobile application runs flawlessly.",
          link: "",
        },
        {
          id: 4,
          title: "iOS App Deployment",
          description: "We are the #1 iOS app development company that provides seamless integration of the apps on all Apple devices. iOS, macOS, WatchOS.",
          link: "",
        },
        {
          id: 5,
          title: "iOS mobile applications consulting",
          description: "We will analyze your iOS app project with business and tech analysts to ensure there are no critical problems.",
          link: "",
        },
      ],
    },
    section7: {
      title: 'Android Apps',
      subTitle: 'Unlock Your Business Potential with a Mobile App',
      benefitsData: [
        {
          title: "Android Apps",
          type:'android',
          innerData: [
            {
              id: 0,
              title: "Open Source",
              description: "An open-source operating system simplifies the integration process and access to developers’ resources."
            },
            {
              id: 1,
              title: "Scalability",
              description: "Android apps easily go together with the Internet of Things, Augmented Reality, and Virtual Reality."
            },
            {
              id: 2,
              title: "Security",
              description: "As a Linux-based platform, it allows end-users to take advantage of the advanced security features underlying Linux. "
            }
          ]

        },
        {
          title: "iOS Apps",
          type:'ios',
          innerData: [
            {
              title: "Reduced Development Time",
              description: "iOS apps require a relatively short development time and can be a great testing ground for your business opportunities."
            },
            {
              title: "Tech-savvy & Loyal Users",
              description: "Apple has a community of tech-savvy and loyal customers, who are receptive to innovative solutions."
            },
            {
              title: "Higher App Revenue",
              description: "It’s known that Apple users are more willing to use in-app paid services. Altogether, it boosts revenue generation."
            }
          ]
        }

      ]
    },
    processAndroid: {
      subTitle: 'iOS App Development',
      title: 'Our iOS App Development process spans several stages',
      image: 'https://jetruby.com/wp-content/uploads/tilda/1001490/pages/8368283/tild6265-3461-4361-b264-616165653761__phone_jetr_2.svg',
      processCard: [
        {
          id: '0',
          number: '1',
          description: 'We discover and discuss your iOS app idea and study your target audience.',
        },
        {
          id: '1',
          number: '2',
          description: 'We start with the UI/UX design process.',
        },
        {
          id: '2',
          number: '3',
          description: 'We kick off the iOS development process and prepare a fully functional MVP.',
        },
        {
          id: '3',
          number: '4',
          description: 'We start working on iOS app deployment and release.',
        },
        {
          id: '4',
          number: '5',
          description: 'We also provide iOS app maintenance and support services.',
        },
      ],
    },
    processIOS: {
      title: 'What sets JetRuby Agency apart from other mobile development companies?',
      subTitle: 'Advantages of mobile development with Nerasoft',
      image: 'https://jetruby.com/wp-content/uploads/tilda/1001490/pages/8368283/tild6635-3762-4062-a131-303163613665__panel.svg',
      processCard: [
        {
          id: '0',
          title: 'Goal-oriented mindset',
          description: 'With more than 13 years of experience, the JetRuby team developed a mindset of being agile, proactive, and swift. We go for results.',
        },
        {
          id: '1',
          title: 'Transparent process',
          description: 'At Nerasoft, we believe in transparency and keep our clients actively involved in every stage of the development process. You get complete control.',
        },
        {
          id: '2',
          title: 'Partner approach',
          description: 'The application itself is not our end goal, your continued success is. Our mobile development team is here to build trust and long-term partnerships.',
        },
        {
          id: '3',
          title: 'Quick Turnaround',
          description: 'Time is money and if you want the business app development to be expedited, we are ready to shoulder your burden. Our team adheres to strict deadlines without compromising on quality.',
        },
      ],
    },
  },
];
