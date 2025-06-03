import Image from "next/image";

export default function KnowMoreSection() {
  return (
    <section className="py-16 px-40 sm:px-8 md:px-16 bg-white">
        <div className="">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-pink-600 font-bold uppercase">Introduction</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Know More About Our
            <br />
            Grand Event
          </h2>
          </div>
          <div>
          <p className="text-gray-600 text-lg">
            Officia expedita pede voluptatibus netus aptent, laoreet consequuntur animi,
            aliqua quod quidem deleniti nibh tempor sequi mi quia ipsam gravida vehicula
            fugit architecto malesuada elit.
          </p>
        </div>
        </div>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
  {/* Left Side Image with overlay */}
  <div className="relative w-full">
    {/* Main Background Image */}
    <div className="overflow-hidden rounded-3xl shadow-lg">
      <Image
        src="/fitness-trainer-man.png"
        alt="Main Event"
        width={700}
        height={500}
        className="w-full h-auto object-cover"
      />
    </div>

    {/* Overlay Small Image - Center Right */}
    <div className="absolute top-1/2 right-0 translate-y-[-50%] translate-x-[92%] w-100 rounded-2xl shadow-lg overflow-hidden border-4 border-white bg-white hidden lg:block">
      <Image
        src="/adaptive-fitness-trainer.png"
        alt="Overlay Event"
        width={400}
        height={400}
        className="w-full "
      />
    </div>
  </div>



        {/* Right Content */}
        
      </div>
    
    </section>
  );
}
