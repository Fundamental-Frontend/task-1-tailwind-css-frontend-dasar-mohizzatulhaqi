import ButtonComponents from "./ButtonComponents";

type CardComponentsProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function CardComponents({ icon, title, description }: CardComponentsProps) {
  return (
    <div className="bg-white rounded-lg p-10 text-center flex flex-col items-center shadow-md relative overflow-hidden">
      <div className="text-6xl mb-8 bg-slate-100 w-24 h-24 flex items-center justify-center rounded-2xl shadow-inner">
        {icon}
      </div>

      <h2 className="text-2xl text-brand-dark font-bold mb-4 tracking-tight">{title}</h2>
      <p className="text-brand-dark mb-10 leading-relaxed font-light text-lg">{description}</p>

      <div className="mt-auto w-full flex justify-center">
        <ButtonComponents label="Selengkapnya" variant="primary" />
      </div>
    </div>
  );
}

export default CardComponents;
