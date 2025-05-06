import about1 from "../assets/images/about01.jpg";
import about2 from "../assets/images/about02.jpg";

const About = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col gap-4">
        <img
          src={about1}
          alt="About section 1"
          className="w-full rounded shadow"
        />
        <img
          src={about2}
          alt="About section 2"
          className="w-full rounded shadow"
        />
      </div>
    </div>
  );
};

export default About;
