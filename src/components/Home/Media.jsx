const Media = () => {
    // Sample media logos
    const mediaLogos = [
      {
        id: 1,
        name: "The Tribune",
        logo: "https://ext.same-assets.com/3652025819/3597880951.webp",
        link: "https://www.tribuneindia.com/"
      },
      {
        id: 2,
        name: "Hindustan Times",
        logo: "https://ext.same-assets.com/3652025819/2867183441.png",
        link: "https://www.hindustantimes.com/"
      },
      {
        id: 3,
        name: "Indian Express",
        logo: "https://ext.same-assets.com/3652025819/181867156.svg",
        link: "https://indianexpress.com/"
      },
      {
        id: 4,
        name: "Economic Times",
        logo: "https://ext.same-assets.com/3652025819/1546785278.webp",
        link: "https://economictimes.indiatimes.com/"
      },
      {
        id: 5,
        name: "Zee Business",
        logo: "https://ext.same-assets.com/3652025819/1902394.bin",
        link: "https://www.zeebiz.com/"
      },
      {
        id: 6,
        name: "Express Computer",
        logo: "https://ext.same-assets.com/3652025819/2231901984.webp",
        link: "https://www.expresscomputer.in/"
      }
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-800">
            Media Coverage
          </h2>
  
          <div className="flex flex-wrap items-center justify-center gap-8">
            {mediaLogos.map((media) => (
              <a
                key={media.id}
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale transition-all duration-300 hover:grayscale-0"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="h-12 max-w-[120px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Media;
  