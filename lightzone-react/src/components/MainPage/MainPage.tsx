import { PostsGrid } from "../PostsGrid";
import { Tabs } from "../Tabs";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const MainPage = () => {
    const { theme } = useContext(ThemeContext)
    return (
        <>
        <div className="page-container" data-theme={`${theme}`}>
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