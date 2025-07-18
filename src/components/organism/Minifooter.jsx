
import {stats} from '../DashBorddata';

const MiniFooter = () => {
    return (
        <div className="bg-blue-600 py-10 mt-5 rounded">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-30 text-center text-white">
                {stats.map((item, index) => (
                    <div key={index}>
                        <h3 className="text-4xl font-bold">{item.value}</h3>
                        <p className="text-sm mt-1">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiniFooter;
