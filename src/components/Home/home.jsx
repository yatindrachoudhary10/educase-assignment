import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
    const navigate = useNavigate(); //Hook from React Router to move between pages

    return (
        <div className="container">
            <div className="page">
                <section className="content home-content">

                    {/* ✨ Intro Section (heading + short description) */}
                    <div className="text-container">
                        <h2 className="heading">Welcome to PopX</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* Buttons for navigation */}
                    <div className="button-container">
                        <button onClick={() => navigate("/SignUp")}>
                            Create Account
                        </button>

                         {/* Takes user to the Login page */}
                        <button onClick={() => navigate("/login")}>
                            Already Registered? Login
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;