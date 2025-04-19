import Footer from "../Footer";

export default function Portfolio(){

    const ProjectList = [
      { name: "Era Z", Tech: "Unity 3D, C#, Shaders", img: "/images/Project-tbnail.png", link: "https://mranonymous22.itch.io/neon-runner" },
      { name: "Cyber Futsu", Tech: "Unity 3D, C#", img: "/images/Project-tbnail(1).png", link: "https://mranonymous22.itch.io/cyber-futsu" },
      { name: "Fantisi Fill", Tech: "Python PyGame", img: "/images/Project-tbnail(2).png", link: "" },
      { name: "Warone 1980", Tech: "Unity 3D, C#, Shaders", img: "/images/Project-tbnail(5).png", link: "https://mranonymous22.itch.io/warzone-1980" },
      { name: "Ball Picker3D", Tech: "Unity, C#", img: "/images/Project-tbnail(4).png", link: "https://mranonymous22.itch.io/ball-picker3d" },
      { name: "Money Chase", Tech: "Unity, C#", img: "/images/Project-tbnail(6).png", link: "https://mranonymous22.itch.io/money-chase" }
    ];
      
    const Grid = () => {
      return (
        <div className="grid grid-cols-3 gap-8 p-12">
          {ProjectList.map((ele) => (
            <div key={ele.name} className="bg-slate-900 text-white p-4 rounded-lg flex flex-col items-center">
              <img src={ele.img} alt={`${ele.name} Image`} className="mb-4 h-60" />
              <br />
              <h3 className="text-lg font-semibold">{ele.name}</h3>
              <p className="text-sm mt-2">{ele.Tech}</p>
              <br />
              {ele.link && (
                <a
                  href={ele.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm mt-2 underline"
                >
                  Read more
                </a>
              )}
            </div>
          ))}
        </div>
      );
    };
      

    return(
        <div>
            <div className="pt-32">
            <h1 className="text-4xl font-bold ml-12">GameDev Projects</h1>
            {Grid()}
            </div>
            
            <Footer/>
        </div>
    );

}