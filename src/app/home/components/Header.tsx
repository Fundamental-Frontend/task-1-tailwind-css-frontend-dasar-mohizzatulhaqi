import ButtonComponents from "../../../components/ButtonComponents";

function Header() {
  return (
    <div className="text-center pt-32 pb-20 px-4 max-w-5xl">
      <h1 className="text-8xl md:text-[10rem] font-black leading-none mb-8 text-white">
        EduSmart
      </h1>
      <p className="text-xl md:text-3xl mb-12 leading-relaxed max-w-3xl mx-auto font-light">
        Transformasi <span className="text-brand-highlight font-medium">masa depan </span> melalui platform pendidikan digital paling interaktif di Indonesia.
      </p>

      <div className="flex flex-wrap justify-center gap-6 items-center">
        <ButtonComponents label="Mulai Belajar" variant="primary" />
        <ButtonComponents label="Lihat Kurikulum" variant="secondary" />
      </div>
    </div>
  );
}

export default Header;
