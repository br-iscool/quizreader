import About from "../../components/pages/About";
import Navbar from "../../components/layout/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <About />
            </div>
        </>
    );
}
