interface Service {
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

interface AppDevelopmentProps {
  data: Service[];
}

export default function AppDevelopment({ data }: AppDevelopmentProps) {
  return (
    <section className="  py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12">App development</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((service, index) => (
            <div key={index} className="relative bg-[#F8F8F8] p-8 rounded-lg ">
              <h3 className="lg:text-2xl md:text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8">{service.description}</p>
              <div className="flex flex-wrap space-x-4 mb-20">
                {service.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="px-4 py-2 bg-white rounded-full shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 right-0">
                <img src={service.icon} alt={`${service.title} Icon`} className="h-20 w-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}