import React from "react";
import { DeshbordCard, subjects, TopPerformers, BlogPosts, FeaturedBlog, SubjectsData, BlogData } from "../DashbordData";
import { BookText } from "lucide-react";
import Card from "../molecules/dashBoard/Card";
import Topsubjectcard from "../molecules/dashBoard/Topsubjectcard";
import TopformersCard from "../molecules/dashBoard/TopformersCard";
import PopularSubjects from "../molecules/dashBoard/PopularSubjects";
import LatestfromBlog from "../molecules/dashBoard/LatestfromBlog";
import MiniFooter from "../organism/Minifooter";
import Footer from "../organism/Footer";
import Navbar from "../organism/Navbar";

function Home() {
    return (

        <>
            <div className="p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold">Welcome back, Mukesh</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {DeshbordCard.map((item, index) => (
                        <Card key={index} item={item} index={index} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="w-100 mx-auto bg-white p-6 rounded-xl shadow-xs border">
                        <h3 className="text-xl font-semibold mb-4">Top Subjects</h3>

                        {subjects.map((subject, index) => (
                            <Topsubjectcard key={index} subject={subject} index={index} />
                        ))}
                    </div>
                    <div className="w-100 mx-auto bg-white rounded-xl shadow-sx border p-4">
                        <h2 className="text-lg font-bold mb-4">This Week's Top Performers</h2>
                        <ul className="space-y-3">
                            {TopPerformers.map((user) => (
                                <TopformersCard key={user.id} user={user} />
                            ))}
                        </ul>
                    </div>
                    <div className="w-100 mx-auto bg-white rounded-xl shadow-xs border p-4 space-y-4">
                        <h2 className="text-lg font-bold">Latest Blog Posts</h2>

                        <img
                            src={FeaturedBlog.image}
                            alt={FeaturedBlog.title}
                            className="w-full h-40 object-cover rounded-lg"
                        />

                        <div>
                            <h3 className="font-semibold">{FeaturedBlog.title}</h3>
                            <p className="text-sm text-gray-500">{FeaturedBlog.description}</p>
                        </div>

                        <ul className="space-y-3">
                            {BlogPosts.map((post) => (
                                <li key={post.id} className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-gray-100 p-2 rounded-lg">
                                            <BookText className="w-4 h-4 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">{post.title}</p>
                                            <p className="text-xs text-gray-500">{post.readTime}</p>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="p-4 mt-4 border rounded-1" >
                    <div>
                        <h2 className="text-lg font-bold">Popular Subjects</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                        {SubjectsData.map((item, index) => (
                            <PopularSubjects key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div className="p-4 mt-4 border rounded-1">
                    <h2 className="text-xl font-bold mb-4">Latest from Blog</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {BlogData.map((item) => (
                            <LatestfromBlog key={item.id} item={item} />
                        ))}
                    </div>
                </div>
                <div>
                    <MiniFooter />
                    <Footer />
                </div>


            </div>
        </>
    );
}

export default Home;
