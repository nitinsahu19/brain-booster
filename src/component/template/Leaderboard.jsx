import React from 'react'
import ActionButton from '../atems/ActionButton'
import TopRankCard from '../mecrolejs/TopRankCard'
import Rankcategory from '../orgine/Rankcategory'


const Leaderboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8 space-y-8">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">🏆 Leaderboard</h1>

                <div className="flex flex-wrap justify-center md:justify-end gap-3">
                    <ActionButton bgColor="bg-blue-600 hover:bg-blue-700 text-white" text="Weekly" />
                    <ActionButton bgColor="border border-blue-600 text-blue-600 hover:bg-blue-100" text="Monthly" />
                    <ActionButton bgColor="border border-blue-600 text-blue-600 hover:bg-blue-100" text="All-time" />
                </div>
            </div>

            <div className="flex justify-center ml-25">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
                    <TopRankCard rankSize="text-3xl" text="#1" img="https://randomuser.me/api/portraits/men/23.jpg" name="Michael Chen" point={3120} subject="All Subjects" />
                    <TopRankCard rankSize="text-3xl" text="#2" img="https://randomuser.me/api/portraits/women/32.jpg" name="Sarah Johnson" point={2850} subject="Math, Science" />
                    <TopRankCard rankSize="text-3xl" text="#3" img="https://randomuser.me/api/portraits/women/45.jpg" name="Emily Brown" point={2680} subject="Literature, History" />
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-6xl bg-white rounded-xl overflow-hidden shadow">

                    <div className="grid grid-cols-4 p-4 bg-gray-200 text-sm font-bold text-gray-600">
                        <p>Rank</p>
                        <p>User</p>
                        <p>Score</p>
                        <p>Subjects</p>
                    </div>

                    <Rankcategory rank="#4" userImage="https://randomuser.me/api/portraits/men/12.jpg" user="User 4" score={'2500 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#5" userImage="https://randomuser.me/api/portraits/men/24.jpg" user="User 5" score={'2400 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#6" userImage="https://randomuser.me/api/portraits/men/36.jpg" user="User 6" score={'2300 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#7" userImage="https://randomuser.me/api/portraits/men/48.jpg" user="User 7" score={'2200 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#8" userImage="https://randomuser.me/api/portraits/men/99.jpg" user="User 8" score={'2100 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#9" userImage="https://randomuser.me/api/portraits/men/90.jpg" user="User 9" score={'2000 points'} subjectsF="Various Subjects" />

                    <Rankcategory rank="#10" userImage="https://randomuser.me/api/portraits/men/61.jpg" user="User 10" score={'1900 points'} subjectsF="Various Subjects" />

                </div>
            </div>
        </div>
    )
}

export default Leaderboard



