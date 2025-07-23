import { Link } from 'react-router'

const DefaultPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-100'>
                <div className='text-center'>
                    <p className='text-center text-3xl font-medium'>Page Not Found</p>
                    <Link to='/'><button className='bg-blue-500 text-white font-medium ps-2 pe-2 py-2 rounded text-center mt-3'>Back To Home Page</button></Link>
                </div>
            </div>
        </div>
    )
}

export default DefaultPage
