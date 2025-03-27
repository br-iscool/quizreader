"use client";

import { useState } from "react";
import axios from "axios";

import Navbar from "@/app/components/layout/Navbar";
import Play from "@/app/components/pages/Play";

export default function Home() {
    const [version, setVersion] = useState();

    const fetchOutput = async () => {
        try {
            const response = await axios.get("http://localhost:8000/output");
            setVersion(response.data.version);
        } catch (error) {
            console.error("Error fetching number:", error);
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Play />
            </div>
        </>
    );
}