import SignInForm from './SignInForm';

const SignInPage = () => {
    return (
        <div className="page-container">
            <main className="main">
                <div className="title-wrapper">
                    <a href="#" className="back-home-link">Back to home</a>
                    <h1 className="page-title">Sign In</h1>
                </div>
                <SignInForm/>
            </main>
        </div>
    )
}
export default SignInPage