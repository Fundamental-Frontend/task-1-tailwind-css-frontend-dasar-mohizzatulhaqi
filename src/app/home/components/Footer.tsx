import ButtonComponents from "../../../components/ButtonComponents";

function Footer() {
    return (
        <footer className="w-full bg-brand-dark py-20 mt-40 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pb-20">
                    <div className="text-center lg:text-left max-w-md">
                        <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">
                            EduSmart
                        </h2>
                        <p className="text-white/30 leading-relaxed font-light text-lg">
                            Platform pembelajaran paling interaktif di Indonesia.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <p className="text-white/30 text-sm font-medium">Siap untuk memulai?</p>
                        <div className="flex gap-4">
                            <ButtonComponents label="Hubungi CS" variant="secondary" />
                            <ButtonComponents label="Akses Gratis" variant="primary" />
                        </div>
                    </div>
                </div>

                <div className="pt-8  text-center text-white/30 text-sm font-light">
                    &copy; 2026 EDUSMART
                </div>
            </div>
        </footer>
    );
}

export default Footer;
