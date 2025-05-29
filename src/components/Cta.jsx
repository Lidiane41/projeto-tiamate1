import cta1 from "../assets/cta-1.png"
import cta2 from "../assets/cta-2.png"
const Cta = ({texto}) => {
    return (
        <section
            className="bg-cover bg-center h-64 flex items-center justify-center px-4 flex-col gap-4"
            style={{ backgroundImage: `url(${cta1})` }}
        >
            <h2 className="text-cinza text-2xl text-center">
                {texto}
            </h2>
            <button className="px-25 py-1 bg-[#C7794A]">
                 Mais Informações
            </button>
        </section>        
    );
}

export default Cta;