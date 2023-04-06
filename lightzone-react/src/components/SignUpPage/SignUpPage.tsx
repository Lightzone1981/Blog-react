import SignUpForm from './SignUpForm';
import { Link } from "react-router-dom";

const SignUpPage = () => {

    return (
        <main className="main">
            <div className="title-wrapper">
                <Link to={'/posts'} style={{textDecoration:'none'}}>
                    <a href="#" className="back-home-link">Back to home</a>
                </Link>
                <h1 className="page-title">Sign Up</h1>
            </div>
            <SignUpForm/>
        </main>
    )
}
export default SignUpPage