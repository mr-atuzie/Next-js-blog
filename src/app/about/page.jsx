import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <div>
        <Image src="/about.png" alt="about" width={500} height={500} />
      </div>
    </div>
  );
};

export default AboutPage;
