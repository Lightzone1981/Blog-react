import { MainFooter } from "../MainFooter";
import { MainHeader } from "../MainHeader"
import { PostsGrid } from "../PostsGrid";
import { Tabs } from "../Tabs";

const MainPage = () => {
    return (
        <>
        <div className="page-container">
            <main className="main">
                <div className="title-wrapper">
                    <h1 className="page-title">Blog</h1>
                </div>
                <Tabs/>
                <PostsGrid />
            </main>
        </div>
        </>
    )
}
export default MainPage