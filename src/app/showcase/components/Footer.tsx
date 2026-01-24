export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 mt-16">
            <div className="container mx-auto px-4 max-w-7xl text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Build Your Climate Solution?</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Join the next cohort of Software for Climate and lay the groundwork for your
                    next steps in climate tech.
                </p>
                <a
                    href="https://www.terra.do/climate-change-courses/software-for-climate/?utm_source=showcase&utm_medium=footer&utm_campaign=final_projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition"
                >
                    Sign Up for the Next Cohort
                </a>
            </div>
        </footer>
    );
}
