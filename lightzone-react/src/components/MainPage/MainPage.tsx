import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader"
import { PostsGrid } from "../PostsGrid";
import { Tabs } from "../Tabs";

const MainPage = () => {
    return (
        <>
        <MainHeader />
        <div className="page-container">
                <main className="main">
                    <Tabs/>
                    <div className="title-wrapper">
                        <h1 className="page-title">Blog</h1>
                    </div>
                <PostsGrid />
            </main>
            <MainFooter/>
        </div>
        </>
    )
}
export default MainPage