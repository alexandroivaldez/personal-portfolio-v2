const Resume = () => {
  return (
    <div className="w-[90%] h-screen border border-red-500 flex flex-col ml-auto mr-auto">
      <h1 className="text-[40px] font-bold">Resume</h1>
      <div className="w-[100%] h-screen border border-red-500 flex gap-[15px]">
        <div className="border border-blue-500 w-[50%] flex flex-col gap-[50px]">
          <div className="border border-purple-500">
            <h2 className="font-bold text-[32px]">Skills</h2>
            <p>
              <span className="font-bold">Front-end:</span> React, JavaScript
            </p>
            <p>
              <span className="font-bold">AI/ML:</span> LangChain, Python, AWS Bedrock, RAG, Generative AI
            </p>
            <p>
              <span className="font-bold">Middle-ware:</span> Express, Axios, Node.js
            </p>
            <p>
              <span className="font-bold">Serverless Tech:</span> Tailwind, CSS{" "}
            </p>
            <p>
              <span className="font-bold">Automation:</span> Puppeteer{" "}
            </p>
            <p>
              <span className="font-bold">Cloud Services:</span> AWS{" "}
            </p>
            <p>
              <span className="font-bold">UI/ UX:</span> Figma
            </p>
          </div>
          <div className="border border-purple-500">
            <h2 className="font-bold text-[32px]">Certifications</h2>
            <div>
              <h2><span className="font-bold">AWS Certified Cloud Practitioner</span></h2>
              <p>2023 - 2027</p>
            </div>
            <div>
              <h2><span className="font-bold">GitHub Foundations Certification</span></h2>
              <p>2024 - 2028</p>
            </div>
          </div>
          <div className="border border-purple-500">
            <h2 className="font-bold text-[32px]">Download Resume</h2>
            <button className="bg-black text-white h-[80px] w-[220px] rounded-full">
              Download
            </button>
          </div>
        </div>
        <div className="border border-blue-500 w-[50%] flex flex-col justify-between">
          <div>
            <h1 className="font-bold text-[32px]">Software Developer</h1>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              I’m a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[32px]">Software Developer</h1>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              I’m a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[32px]">Software Developer</h1>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              I’m a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
          <div>
            <h1 className="font-bold text-[32px]">Software Developer</h1>
            <p>Meneses Law | Houston, Texas | 2023 - Present</p>
            <p>
              I’m a professional software developer based in TX. I specialize in
              full stack development, automation and UI/UX design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
