import Banner from "../Banner/Banner";
import Popular from "../Popular/Popular";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Review from "../Review/Review";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <PopularInstructors></PopularInstructors>
            <Review></Review>
        </div>
    );
};

export default Home;