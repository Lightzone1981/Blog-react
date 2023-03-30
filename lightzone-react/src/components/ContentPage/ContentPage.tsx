import { mockDataPosts} from "../../constants/posts-constants";
import PostContent from "./PostContent";
import PostPagination from '../PostPagination/PostPagination';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const ContentPage = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="page-container" data-theme={`${theme}`}>
            <main className="main">
                <PostContent postObj={mockDataPosts[0]} /> 
                <PostPagination activeItem={1} itemsCount={10} callback={()=>{}}/>
            </main>
        </div>
    )
}

export default ContentPage