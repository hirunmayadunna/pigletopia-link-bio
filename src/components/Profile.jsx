function Profile() {
    return (
        <div className="text-center mb-10 flex flex-col items-center">
            <div className="relative mb-6">
                <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110 animate-pulse-slow"></div>
                <img
                    src="https://i.postimg.cc/ydM8ZQML/channels4-profile.jpg"
                    alt="profile"
                    className="relative w-28 h-28 object-cover rounded-full mx-auto border-4 border-white shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-transform duration-500 hover:scale-105"
                />
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-white drop-shadow-sm">Pigletopia 🐹</h1>
            <p className="text-base font-medium opacity-90 tracking-wide">A little collage of love 💛</p>
        </div>
    );
}

export default Profile;