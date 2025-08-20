import "./signup.css";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const navigate = useNavigate();  // Hook for programmatic navigation between pages
    
     // Handles form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload on form submit
         
        //Collect form data (all inputs) as key-value pairs
        const formData = new FormData(e.target);  
        const data = Object.fromEntries(formData);  // Convert FormData → JS object
        
        //Navigate to Profile page and send this data along as "state"
        navigate("/profile", { state: data });
    };

    return (
        <div className="container">
            <div className="page">
                <section className="content content-signup">

                    {/* 👋 Heading */}
                    <h2 className="heading">Create your PopX Account</h2>
                    
                    {/* 📝 Signup Form */}
                    <form className="form signup-form" onSubmit={handleSubmit}>

                        {/* 🔤 Full Name Field */}
                        <div className="input-group">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your full name"
                                required
                            />
                            <label htmlFor="name" className="required">Full Name</label>
                        </div>


                        {/* Phone Number Field */}
                        <div className="input-group">
                            <input
                                type="number"
                                maxLength={10}
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                required
                            />
                            <label htmlFor="phone" className="required">
                                Phone number
                            </label>
                        </div>
                         
                        {/* Email Field */}
                        <div className="input-group">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email address"
                                required
                            />
                            <label htmlFor="email" className="required">
                                Email address
                            </label>
                        </div>
                        
                         {/*Password Field */}
                        <div className="input-group">
                            <input
                                type="password"
                                name="pwd"
                                id="pwd"
                                placeholder="Enter your password"
                                required
                            />
                            <label htmlFor="pwd" className="required">
                                Password
                            </label>
                        </div>
                      
                        {/*Company Name Field */}
                        <div className="input-group">
                            <input
                                type="text"
                                name="comp-name"
                                id="comp-name"
                                placeholder="Enter your company name"
                                required
                            />
                            <label htmlFor="comp-name" >
                                Company Name
                            </label>
                        </div>
                            
                         {/* Agency Selection (Radio buttons) */}   
                        <div className="input-group signup-radio">
                            <span className="agency-span required">Are you an Agency?</span>

                            <div className="radio-btns">
                                <div className="radio-btn">
                                    <input
                                        id="radio-yes"
                                        type="radio"
                                        name="agency"
                                        value={"Yes"}
                                        required
                                    />
                                    <span>Yes</span>
                                </div>

                                <div className="radio-btn">
                                    <input
                                        id="radio-no"
                                        type="radio"
                                        name="agency"
                                        value={"No"}
                                        required
                                    />
                                    <span>No</span>
                                </div>
                            </div>
                        </div>
                         
                         {/* Submit Button */}
                        <button id="create-acc-btn" type="submit">
                            Create Account
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default SignUp;