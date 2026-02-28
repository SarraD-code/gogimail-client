import "./Home.scss";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Home = ({ }) => {
    console.log("Home")
    return (
        
        <>
        <PageWrapper>
            <div className="home-cards">
                <div className="card-greeting">
                    Good morning Alex, Here is your dashboard.
                </div>



            </div>
        </PageWrapper>
        </>
    );
}
export default Home;