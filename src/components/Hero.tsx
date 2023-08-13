import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full overflow-hidden">
      <Image
        src="/images/mountain_hero.jpeg"
        alt="Post Preview Image"
        fill={true}
        objectFit="cover"
        quality={100}
        objectPosition="0 70%"
      />
    </div>
  );
};

export default Hero;
