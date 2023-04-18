import { PostsGrid } from "../PostsGrid";
import { Tabs } from "../Tabs";

const MainPage = () => {
    return (
        <>
        <main className="main">
            <div className="title-wrapper">
                <h1 className="page-title">Blog</h1>
            </div>
            <Tabs/>
            <PostsGrid />
        </main>
        </>
    )
}
export default MainPage