type Props = {
    onOpenAbout: () => void;
};

export default function Header({ onOpenAbout }: Props) {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="container mx-auto px-4 py-12 max-w-7xl text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-3">
                    Software for Climate Final Projects
                </h1>
                <p className="text-lg md:text-xl mb-6 text-blue-100">
                    Showcasing 2-week capstone projects from our alumni
                </p>
                <div className="flex gap-4 flex-wrap justify-center">
                    <button
                        onClick={onOpenAbout}
                        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        More About the Course and Projects →
                    </button>
                </div>
            </div>
        </div>
    );
}
