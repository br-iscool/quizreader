import PlayInput from "@/app/components/ui/play/PlayInput";
import Button from "@/app/components/ui/Button";
import PlayOutput from "../ui/play/PlayOutput";

export default function Play() {
    return (
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <Button text="Play" />
            <PlayInput />
            <PlayOutput />
        </div>
    )
}