import './AddPostPage.css'
import AddPostForm from './AddPostForm';
import { Link } from "react-router-dom"
import { ThemeContext } from "../../contexts/themeContext";
import { useContext } from 'react';

const AddPostPage = () => {
    const {theme} = useContext(ThemeContext)
    return(
    <main className="main">
        <div className="title-wrapper">
        <Link to={'/posts'} style={{textDecoration:'none'}}>
            <a href="#" className="back-home-link">Home</a>
                </Link>
            <span className="breadcrumbs-item">{'| Add Post'}</span>
            <h1 className="page-title">Add Post</h1>
        </div>
        <AddPostForm/>
    </main>
    )
}

export default AddPostPage