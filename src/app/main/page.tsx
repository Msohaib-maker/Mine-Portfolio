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
            <h2>I am hardcore and 🚀 passionate software engineer who has experience in HTML, CSS, JavaScript, React.JS, Next.JS, Unity, OpenGL, C#, C++, Java. I believe in following the best pratices in the software industry. </h2>
            </div>
            
        </div>
    );
}