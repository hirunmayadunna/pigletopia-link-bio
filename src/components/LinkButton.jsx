import { FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa";

function LinkButton({ title, url }) {
    // Dynamically select the icon based on the title
    const renderIcon = (platformTitle) => {
        switch (platformTitle.toLowerCase()) {
            case "youtube": return <FaYoutube />;
            case "tiktok": return <FaTiktok />;
            case "facebook": return <FaFacebook />;
            default: return null;
        }
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full py-4 px-6 rounded-2xl text-lg font-bold tracking-wide transition-all duration-300 ease-out overflow-hidden bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 shadow-[0_4px_10px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.2)] text-white hover:bg-white/10 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 active:bg-black/20"
        >
            <span className="absolute left-6 text-2xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">
                {renderIcon(title)}
            </span>
            <span className="relative z-10 capitalize drop-shadow-md">{title}</span>
        </a>
    );
}

export default LinkButton;