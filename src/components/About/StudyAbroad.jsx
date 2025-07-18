
import studyImg from "../../assets/HeroImg/Studyimage.jpg";
export default function StudyAbroad() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gray-100 transform -skew-y-3 scale-x-150 origin-left -mb-16 z-0"></div>

      <div className="container mx-auto py-26 px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl py-4 font-bold text-black mb-6">
              STUDYING{" "}
              <span className="relative inline-block">
                ABROAD
                {/* <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-500"></span> */}
              </span>
            </h1>
            <p className="text-base text-gray-800 max-w-md">
                Studying abroad provides students with valuable cultural experiences and academic growth. It enhances language skills and opens doors to global career opportunities.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={studyImg}
              alt="Study Abroad"
              className="w-full max-w-sm object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
