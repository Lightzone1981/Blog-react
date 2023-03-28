import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader"
import SignUpForm from './SignUpForm';

const SignUpPage = () => {
    return (
        <>
            <MainHeader />
            <div className="page-container">
                <main className="main">
                    <div className="title-wrapper">
                        <a href="#" className="back-home-link">Back to home</a>
                        <h1 className="page-title">Sign Up</h1>
                    </div>
                    <SignUpForm/>
                </main>
                <MainFooter/>
            </div>
        </>
    )
}
export default SignUpPage