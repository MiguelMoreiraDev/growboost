import Button from "../components/button";
import Logo from "../components/logo";

const menuLinks = [
    {
        id: 1,
        name: "Serviços",
        href: "#servicos",
    },
    {
        id: 2,
        name: "Depoimentos",
        href: "#depoimentos",
    },
    {
        id: 3,
        name: "FAQ",
        href: "#faq",
    },
];

const Header = () => {
    return (
        <>
            <header className="container relative flex h-40 items-center justify-between bg-bg max-lg:h-28">
                <div>
                    <Logo />
                </div>
                <nav>
                    <button className="hidden flex-col items-end gap-1 p-2 transition-all ease-in-out hover:brightness-125 max-lg:flex">
                        <span className="main-gradient block h-1 w-8 rounded-full"></span>
                        <span className="main-gradient block h-1 w-6 rounded-full"></span>
                        <span className="main-gradient block h-1 w-4 rounded-full"></span>
                    </button>

                    <ul className="flex items-center gap-8 font-poppins max-lg:hidden">
                        {menuLinks.map((item) => (
                            <li
                                className="text-light-2 transition-all ease-in-out hover:text-light-1"
                                key={item.id}
                            >
                                <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                        <Button text="Solicitar orçamento" />
                    </ul>
                </nav>

                {/* menu mobile */}

                <ul className="absolute left-0 top-36 mx-0 hidden w-full max-w-full flex-col items-center gap-8 bg-dark-2 py-10 font-poppins max-lg:top-24 max-lg:hidden max-lg:py-10">
                    {menuLinks.map((item) => (
                        <li
                            className="text-light-2 transition-all ease-in-out hover:text-light-1"
                            key={item.id}
                        >
                            <a href={item.href}>{item.name}</a>
                        </li>
                    ))}
                    <Button text="Solicitar orçamento" />
                </ul>
            </header>
        </>
    );
};

export default Header;
