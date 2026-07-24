export default function Portfolio() {
  const ProjectList = [
    {
      name: "Cyber Futsu",
      Tech: "Unity 3D, C#",
      video: "/videos/enemyBossScene.mp4",
      img: "/images/Project-tbnail(1).png",
      link: "https://mranonymous22.itch.io/cyber-futsu",
    },
    {
      name: "Cyber Futsu",
      Tech: "Unity 3D, C#",
      video: "/videos/enemyScene.mp4",
      img: "/images/Project-tbnail(1).png",
      link: "https://mranonymous22.itch.io/cyber-futsu",
    },
  ];

  const Grid = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-12 max-w-7xl mx-auto">
        {ProjectList.map((ele, index) => (
          <div
            key={`${ele.name}-${index}`}
            className="group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
          >
            <div className="relative h-80 overflow-hidden bg-black">
              {ele.video ? (
                <video
                  src={ele.video}
                  poster={ele.img}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={ele.img}
                  alt={`${ele.name} Image`}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                {ele.name}
              </h3>
              <p className="text-sm mt-2 text-cyan-400/80 font-mono uppercase tracking-wider">
                {ele.Tech}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="pt-32">
        <h1 className="text-4xl font-bold ml-12">GameDev Projects</h1>
        <Grid />
      </div>
    </div>
  );
}
