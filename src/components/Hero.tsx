import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      <Image
        src="/images/mountain_hero.jpeg"
        alt="Post Preview Image"
        className="object-cover object-[0,70%]"
        fill={true}
        priority
        quality={100}
      />
    </div>
  );
};

export default Hero;
