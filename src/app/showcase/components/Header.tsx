export default function Header() {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
            <div className="container mx-auto px-4 py-12 max-w-7xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Software for Climate Final Projects
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-3xl">
                    Students build a variety of projects during the class, culminating in a single
                    final project combining concepts learned with their own background skills and
                    expertise. These are the projects that have been shared by our Software For
                    Climate alumni.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <a
                        href="https://www.terra.do/climate-change-courses/software-for-climate/?utm_source=showcase&utm_medium=header&utm_campaign=final_projects"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
                    >
                        Learn About the Course →
                    </a>
                </div>
            </div>
        </div>
    );
}
