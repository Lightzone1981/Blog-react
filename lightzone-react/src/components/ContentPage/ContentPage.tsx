import { mockDataPosts} from "../../constants/posts-constants";
import PostContent from "./PostContent";
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const ContentPage = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <PostContent postObj={mockDataPosts[0]}/> 
            </main>
        </div>
    )
}

export default ContentPage