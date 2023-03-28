import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader"
import SignInForm from './SignInForm';

const SignInPage = () => {
    return (
        <>
            <MainHeader />
            <div className="page-container">
                <main className="main">
                    <div className="title-wrapper">
                        <a href="#" className="back-home-link">Back to home</a>
                        <h1 className="page-title">Sign In</h1>
                    </div>
                    <SignInForm/>
                </main>
                <MainFooter/>
            </div>
        </>
    )
}
export default SignInPage