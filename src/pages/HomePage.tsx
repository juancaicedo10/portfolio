import logo from "../images/logo.png";
import TypeWriter from "../components/typeWritter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function HomePage() {
  return (
    <div
      className="bg-black w-full min-h-[100vh] text-white flex flex-col items-center font-mono"
      id="home"
    >
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-3/4 md:w-[55%] mt-24 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
        <img
          src={logo}
          alt="juancoding logo"
          className="w-full h-full object-cover"
        />
      </div>
      <TypeWriter text={["Juuan Esteban Caicedo Valencia"]} speed={60} />
      <h2 className="text-4xl font-bold font-russo text-purple-600 my-2 text-center md:text-6xl">
        Mid-Senior FullStack Developer
      </h2>
      <p className="sm:text-center text-sm md:text-base xl:w-1/2 font-bold text-gray-300 w-full xl:text-start text-center px-4 md:w-3/4">
        Full Stack Web Developer with over 1.5 years of experience. I have
        strong proficiency in key technologies such as .NET Core, MERN stack
        (MongoDB, Express.js, React, Node.js), Angular, SQL Server, and Azure.
        <br />
        In addition to technical expertise, I possess strong soft skills
        including problem-solving, effective communication, adaptability, and
        the ability to collaborate efficiently with cross-functional teams. I
        prioritize tasks effectively and manage time well to meet deadlines
        while ensuring the quality of the code and overall project success.
      </p>
      <div className="grid grid-cols-2 gap-5 py-4">
        <a href="https://github.com/JuanCaicedo10" target="_blank">
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/juan-esteban-caicedo-valencia-a07551264/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
}

export default HomePage;
