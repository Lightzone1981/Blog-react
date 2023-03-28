import { mockDataPosts} from "../../constants/posts-constants";
import PostContent from "./PostContent";

const ContentPage = () => {
    return (
        <div className="page-container">
            <main className="main">
                <PostContent postObj={mockDataPosts[0]}/> 
            </main>
        </div>
    )
}

export default ContentPage