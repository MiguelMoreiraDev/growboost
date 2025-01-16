import Header from "./layout/header";
import Hero from "./layout/hero";

function App() {
    return (
        <>
            <div>
                {/* header */}
                <Header />
                <div className="space-y-60">
                    <Hero />
                </div>
            </div>
        </>
    );
}

export default App;
