import Footer from "../Footer";
import Navbar from "../Navbar";


export default function Portfolio(){

    const ProjectList = [
        {name: "Era Z", Tech: "Unity 3D, C#, Shaders", img: "/images/Project-tbnail.png"},
        {name: "Cyber Futsu", Tech: "Unity 3D, C#", img: "/images/Project-tbnail(1).png"},
        {name: "Fantisi Fill", Tech: "Python PyGame", img: "/images/Project-tbnail(2).png"},
        {name: "Warone 1980", Tech: "Unity 3D, C#, Shaders", img: "/images/Project-tbnail(3).png"},
      ]
      
      const Grid = () => {
        return (
          <div className="grid grid-cols-3 gap-8 p-12">
            {
              ProjectList.map((ele) => (
                <div key={ele.name} className="bg-slate-900 text-white p-4 rounded-lg flex flex-col items-center">
                  <img src={ele.img} alt={`${ele.name} Image`} className="mb-4" />
                  <h3 className="text-lg font-semibold">{ele.name}</h3>
                  <p className="text-sm mt-2">{ele.Tech}</p>
                  <br />
                </div>
              ))
            }
          </div>
        );
    }
      

    return(
        <div>
            <Navbar/>
            <div className="pt-32">
            <h1 className="text-4xl font-bold ml-12">GameDev Projects</h1>
            {Grid()}
            </div>
            
            <Footer/>
        </div>
    );

}