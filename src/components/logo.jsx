const Logo = () => {
    return (
        <>
            <a href="/">
                <img
                    className="block max-md:hidden"
                    src="/logo.svg"
                    alt="Logo da GrowBoost"
                />
                <img
                    className="hidden max-md:block"
                    src="/logo_small.svg"
                    alt="Logo da GrowBoost"
                />
            </a>
        </>
    );
};

export default Logo;
