// import { mockDataPosts} from "../../constants/posts-constants";
import { IStoreState, IPostInfo } from "../../types";
import PostContent from "./PostContent";
import PostPagination from '../PostPagination/PostPagination';
import { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { setSelectedPost } from "../../redux/action-creators/";




const ContentPage = () => {
    const posts = useSelector((state: IStoreState) => state.posts.posts)
    const selectedPost = useSelector((state: IStoreState) => state.posts.selectedPost)
    const dispatch = useDispatch()

    let postIndex = posts.reduce((res: number, el: IPostInfo, index: number) => {
        if (String(el.id) === String(selectedPost.id)) res = index
        return res
    }, 0)

    const handlePaginationClick = (e:any) => {

        if (e.currentTarget.id === 'pagination-button-prev') 
            if (postIndex - 1 >= 0) postIndex -= 1
        
        if (e.currentTarget.id === 'pagination-button-next') 
            if (postIndex + 1 < posts.length) postIndex += 1

        dispatch(setSelectedPost(posts[postIndex] || {} as IPostInfo))
    }


    return (
        <main className="main">
            <PostContent/> 
            <PostPagination activeItem={postIndex+1} itemsCount={posts.length} callback={(e:any) => {handlePaginationClick(e) }} />
        </main>
    )
}

export default ContentPage