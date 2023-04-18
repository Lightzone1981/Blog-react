import SignUpForm from './SignUpForm';
import { Link } from "react-router-dom";

const SignUpPage = () => {

    return (
        <main className="main">
            <div className="title-wrapper">
                <Link to={'/posts'} className="back-home-link" style={{textDecoration:'none'}}>
                    Back to home
                </Link>
                <h1 className="page-title">Sign Up</h1>
            </div>
            <SignUpForm/>
        </main>
    )
}
export default SignUpPage