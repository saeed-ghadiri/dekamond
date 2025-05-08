import about1 from "../assets/images/about01.jpg";
import about2 from "../assets/images/about02.jpg";
import about3 from "../assets/images/about03.jpg";


const About = () => {
  return (
    <div className="">
        <img src={about1} alt="About section 1" className="w-full rounded-lg" />
        <img src={about2} alt="About section 2" className="w-full rounded-lg" />
        <img src={about3} alt="About section 3" className="w-full rounded-lg" />
    </div>
  );
};

export default About;
