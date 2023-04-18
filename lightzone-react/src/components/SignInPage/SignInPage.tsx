import SignInForm from './SignInForm';
import { Link } from 'react-router-dom';

const SignInPage = () => {

    return (
        <main className="main">
            <div className="title-wrapper">
            <Link to={'/posts'} className="back-home-link" style={{textDecoration:'none'}}>
                Back to home
            </Link>
                <h1 className="page-title">Sign In</h1>
            </div>
            <SignInForm/>
        </main>
    )
}
export default SignInPage