import UnderConstruction from '../assets/Website-Under-Construction.png';

const Construction = () => {

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-yellow-500">
                <img src={UnderConstruction} alt="Under Construction" className="max-w-5xl"/>
        </div>
    )
}

export default Construction;
