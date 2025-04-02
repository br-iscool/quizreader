interface PlayOutputProps {
    output?: string;
}

export default function PlayOutput({output}: PlayOutputProps) {
    return (
        <div className="flex bg-gray-700 dark:bg-gray-500 max-w-3xl h-64 rounded-2xl">
            {output}
        </div>
    )
}