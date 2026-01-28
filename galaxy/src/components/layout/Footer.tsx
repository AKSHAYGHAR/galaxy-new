
export function Footer() {
    return (
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-black/40 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm text-white/60 font-medium tracking-wide">
                    &copy; {new Date().getFullYear()} Galaxy. All rights reserved.
                </p>

                <span
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                    <span>Designed by Akshay</span>
                </span>
            </div>
        </footer>
    );
}
