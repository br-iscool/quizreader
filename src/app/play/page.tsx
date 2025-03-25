import Hero from "./../components/Hero";
import Navbar from "./../components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="p-24">
                    <p className="text-xl">Play</p>
                </div>
            </div>
        </>
    );
}
