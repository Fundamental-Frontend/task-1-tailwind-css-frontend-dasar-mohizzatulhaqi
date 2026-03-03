import CardComponents from "../../../components/CardComponents";

function Features() {
  return (
    <div className="flex flex-col justify-center items-center w-full py-20 pb-40">
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold uppercase text-brand-highlight mb-4">
          Keunggulan Utama
        </h2>
        <h3 className="text-5xl md:text-6xl font-bold text-white">
          Fitur EduSmart
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        <CardComponents
          icon={<span className="text-4xl">📚</span>}
          title="Materi Interaktif"
          description="Belajar dengan materi yang menarik dan interaktif."
        />

        <CardComponents
          icon={<span className="text-4xl">👨‍🏫</span>}
          title="Mentor Profesional"
          description="Dapatkan bimbingan dari mentor berpengalaman di bidangnya."
        />

        <CardComponents
          icon={<span className="text-4xl">📜</span>}
          title="Sertifikat Resmi"
          description="Dapatkan sertifikat resmi setelah menyelesaikan kursus."
        />
      </div>
    </div>
  );
}

export default Features;
