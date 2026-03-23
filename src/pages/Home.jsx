import Profile from "../components/Profile";
import LinkButton from "../components/LinkButton";
import links from "../data/links";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900 via-purple-950 to-black text-white px-6 py-12 relative overflow-hidden selection:bg-purple-500/30">
            {/* Subtle background glow elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                <Profile />

                <div className="w-full space-y-6">
                    {links.map((link, index) => (
                        <LinkButton key={index} {...link} />
                    ))}
                </div>
            </div>
            
            <footer className="mt-16 text-sm font-medium opacity-50 tracking-wider">
                © {new Date().getFullYear()} Pigletopia
            </footer>
        </div>
    );
}

export default Home;