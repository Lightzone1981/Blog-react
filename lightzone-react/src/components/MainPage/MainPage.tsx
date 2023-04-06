import { PostsGrid } from "../PostsGrid";
import { Tabs } from "../Tabs";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const MainPage = () => {
    const { theme } = useContext(ThemeContext)
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