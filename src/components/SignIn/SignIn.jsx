import { useNavigate } from "react-router-dom";
import "./signin.css";

const SignIn = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();   // Prevent page refresh
        
        // Collect all form input values
        const formData = new FormData(e.target);  // extracts all inputs inside <form>
        const data = Object.fromEntries(formData); // converts FormData → plain object 
        
        // Navigate to Profile page and send form data along as "state"
        navigate("/profile", { state: data });
    };

    return (
        <div className="container">
            <div className="page">
                <section className="content content-signin">
                    <h2 className="heading">Signin to your PopX account</h2>
                    <p className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                    
                    {/* Signin Form */}
                    <form className="form signin-form" onSubmit={handleSubmit}>
                        
                        {/* 📧 Email Input */}
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
                                required
                            />
                            <label htmlFor="email">Email Address</label>
                        </div>
                        
                        {/* Password Input */}
                        <div className="input-group">
                            <input
                                type="password"
                                name="pwd"
                                id="pwd"
                                placeholder="Enter password"
                                required
                            />
                            <label htmlFor="pwd">Password</label>
                        </div>
                        
                        {/* ▶️ Login Button */}
                        <button type="submit" id="submit-btn">
                            Login
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SignIn;