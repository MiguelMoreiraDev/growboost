import Button from "../components/button";
import HeroCard from "../components/HeroCard/index";
import { Plus, Users2 } from "lucide-react";

const sponsorsList = [
    {
        id: 1,
        img: "/spotify_logo.svg",
    },
    {
        id: 2,
        img: "/google_logo.svg",
    },
    {
        id: 3,
        img: "/airbnb_logo.svg",
    },
    {
        id: 4,
        img: "/figma_logo.svg",
    },
];

const Hero = () => {
    return (
        <>
            <section className="container grid grid-cols-2 gap-10">
                {/* hero content */}
                <div className="grid">
                    <div>
                        <h1 className="relative mb-4 max-w-2xl text-6xl/snug">
                            Transformamos Visitantes em{" "}
                            <span className="mr-3 inline-block bg-gradient-to-r from-[#cc4fa4] via-[#865bbc] to-[#4698df] bg-clip-text text-transparent">
                                Clientes
                            </span>
                            Fiéis!
                            <img
                                className="absolute -right-10 top-40"
                                src="/pen_draw.svg"
                                alt="Riscos de caneta com gradiente do roxo para o azul"
                            />
                        </h1>
                        <p className="mb-8 flex items-center gap-2 font-roboto text-light-2">
                            <span className="main-gradient block h-1 w-20" />
                            Descubra estratégias personalizadas para alavancar
                            suas vendas online.
                        </p>
                        <Button text="Solicitar consultoria gratuita" />
                    </div>
                    <ul className="flex items-center gap-8 self-end">
                        {sponsorsList.map((item) => (
                            <li key={item.id}>
                                <img src={item.img} alt={item.id} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* hero img */}
                <div className="relative">
                    <HeroCard.Root
                        className={
                            "absolute -right-16 top-32 flex max-w-96 select-none items-center gap-4 rounded-2xl bg-dark-2 px-8 py-4"
                        }
                    >
                        <div className="main-gradient rounded-full p-5">
                            <HeroCard.Icon icon={Plus} />
                        </div>
                        <HeroCard.Content className={"flex flex-col"}>
                            <HeroCard.Title
                                title="Resultados"
                                className={"font-poppins text-lg text-light-1"}
                            />
                            <HeroCard.Description
                                text="Aumento de 200% nas Vendas Online"
                                className={"font-roboto text-light-2"}
                            />
                        </HeroCard.Content>
                    </HeroCard.Root>
                    <HeroCard.Root
                        className={
                            "absolute bottom-40 left-40 flex max-w-96 select-none items-center gap-4 rounded-2xl bg-dark-2 px-4 py-2"
                        }
                    >
                        <div className="main-gradient rounded-full p-2">
                            <HeroCard.Icon icon={Users2} className={"size-4"} />
                        </div>
                        <HeroCard.Content className={"flex flex-col"}>
                            <HeroCard.Description
                                text="+50 mil Visitas em 2 meses"
                                className={"font-roboto text-light-2"}
                            />
                        </HeroCard.Content>
                    </HeroCard.Root>
                    <img
                        className="absolute bottom-52 left-28"
                        src="/hero_main_star.svg"
                        alt="Icone de uma estrela roxa"
                    />
                    <div className="absolute right-80 top-16">
                        <img
                            className="relative"
                            src="/hero_star_01.svg"
                            alt="Icone de uma estrela grande"
                        />
                        <img
                            className="relative right-4 size-6"
                            src="/hero_star_02.svg"
                            alt="Icone de uma estrela média"
                        />
                        <img
                            className="relative -right-6 -top-6 size-4"
                            src="/hero_star_03.svg"
                            alt="Icone de uma estrela pequena"
                        />
                    </div>
                    <img
                        className="absolute bottom-60 right-20"
                        src="/hero_asterisco.svg"
                        alt="icone de asterisco na cor roxa"
                    />
                    <img
                        className="select-none max-xl:size-96"
                        src="hero_img.webp"
                        alt="Imagem de um foguete nas cores azul e roxo"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
