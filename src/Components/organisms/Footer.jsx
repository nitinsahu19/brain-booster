import { Link } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 px-6 py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-30">
                <div>
                    <h2 className="text-white text-xl font-bold flex items-center gap-2">
                        🎓 QuizMaster
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed">Empowering learners worldwide with interactive quizzes and comprehensive learning resources.</p>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3  ">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="text-white no-underline" href="#">Home</a></li>
                        <li><a className="text-white no-underline" href="#">Subjects</a></li>
                        <li><a className="text-white no-underline" href="#">Leaderboard</a></li>
                        <li><a className="text-white no-underline" href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a className="text-white no-underline" href="#">Help Center</a></li>
                        <li><a className="text-white no-underline" href="#">Terms of Service</a></li>
                        <li><a className="text-white no-underline" href="#">Privacy Policy</a></li>
                        <li><a className="text-white no-underline" href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="responce">
                    <h3 className="text-white font-semibold mb-3">Connect</h3>
                    <ul className="space-y-2 text-sm">
                        <ul className="space-y-2 ">
                            <li className="decoration-0"><a className="text-white no-underline" href="#">Facebook</a></li>
                            <li><a className="text-white no-underline" href="#">Twitter</a></li>
                            <li><a className="text-white no-underline" href="#">LinkedIn</a></li>
                            <li><a className="text-white no-underline" href="#">Instagram</a></li>
                        </ul>

                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
                <p>© 2024 QuizMaster. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0 text-white">
                    <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                    <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                    <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
