import About from "@/app/components/pages/About";
import Navbar from "@/app/components/layout/Navbar";

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
