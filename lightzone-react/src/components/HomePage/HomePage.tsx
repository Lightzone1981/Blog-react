import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <main className="main main--homepage" style={{flexGrow:'1',justifyContent: 'center', textAlign:'center'}}>
            <h1 className="page-title" style={{ color: '#FFF' }}>Blogofolio</h1>
            <Link to={'/sign-in'}> <p className="link">Sign in</p></Link>
        </main>
    )
}
export default HomePage