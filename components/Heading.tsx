"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <p className="text-2xl">{title}</p>
      <p className="text-[#A7A7A7]">{subtitle}</p>
    </div>
  );
};

export default Heading;
