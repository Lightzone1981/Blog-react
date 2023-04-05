import { mockDataPosts} from "../../constants/posts-constants";
import PostContent from "./PostContent";
import PostPagination from '../PostPagination/PostPagination';
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const ContentPage = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <main className="main">
            <PostContent/> 
            <PostPagination activeItem={1} itemsCount={mockDataPosts.length} callback={()=>{}}/>
        </main>
    )
}

export default ContentPage