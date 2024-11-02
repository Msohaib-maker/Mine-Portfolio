import Link from "next/link"

export default function Main(){
    return(
        <div className="flex flex-col items-center">
            <h1>Main Page</h1>
            <img
                src="/images/avatar.jpg" // Ensure the path is correct
                className="h-80 w-80 rounded-full" // Change h-40 and w-40 to your desired size
                alt="Avatar"
                style={{ borderWidth: '10px', borderColor: '#800080', borderStyle: 'solid' }}
            />
            <div className="w-120">
                <h1>Who am I?</h1>
            <h2>I am hardcore and 🚀 passionate software engineer who has experience in HTML, CSS, JavaScript, React.JS, Next.JS, Unity, OpenGL, C#, C++, Java. I believe in following the best pratices in the software industry. </h2>
            </div>
            <Link href="/portfolio">
                <button>Check my portfolio</button>
            </Link>
            
            <h1>
                JavaScript 8/10,
                HTML 8/10,
                CSS 8/10,
                React JS 8/10,
                Next JS 8/10,
                C++ 6/10,
                C# 7/10
                OpenGL 3/10,
                Unity 7/10,
                Java 8/10,
                DevOps 6/10,
                Git 7/10,
                Figma 8/10,
                Node 6/10
            </h1>
            
            <div>
                <img src="/images/avatar.jpg"/>
                <img src="/images/avatar.jpg"/>
            </div>

        </div>
    );
}