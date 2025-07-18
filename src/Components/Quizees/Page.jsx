import { FaCoins } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { useTimer } from "react-timer-hook";
import AnswerFiled from "../../UI/InputField/AnswerFiled";



const TimerFun = ({ expiryTimestamp }) => {
    const { seconds, minutes } = useTimer({
        expiryTimestamp,
        onExpire: () => alert("Time's up !")
    })
    return (
        <div>
            {String(minutes).padStart(2, 0)} :{String(seconds).padStart(2, 0)}
        </div>
    )

}
const Quizees = () => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + 15 * 60)


    return (
        <>


            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Mathematics</h2>
                            <p className="text-sm text-gray-500">Calculus Basics Quiz</p>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                                <span><LuClock3 /></span>
                                <TimerFun expiryTimestamp={time} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span><FaCoins className='text-yellow-500' /> </span>
                                <span>100</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-gray-800 mb-2">Question {'1'} of {'10'}</p>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div className="h-2 bg-blue-600 rounded-full w-1/10"></div>
                        </div>
                    </div>

                    <p className="text-lg text-gray-900 font-medium">
                        {/* What is the derivative of f(x) = x² with respect to x? */}
                        1. Questions
                    </p>


                    <div className="space-y-3">
                        <div

                            className="border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                        >
                            <p>Answers 1</p>
                        </div>
                        <div
                            className="border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                        >
                            <p>Answers 2</p>
                        </div>
                        <div
                            className="border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                        >
                            <p>Answers 3</p>
                        </div>
                        <div
                            className="border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition"
                        >
                            <p>Answers 4</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <button className="px-5 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
                            Previous
                        </button>
                        <button className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                            Next
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Quizees