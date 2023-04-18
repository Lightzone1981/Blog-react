import Button from "../Buttons/Button"
import { Input, TextArea } from '../../components';
import { useState} from 'react';
import './AddPostPage.css'
import { Link } from "react-router-dom";

const AddPostForm = () => {
    const [titleText, setTitleText] = useState('')
    const [lessonText, setLessonText] = useState('')
    const [descriptionText, setDescriptionText] = useState('')
    const [postText, setPostText] = useState('')
    const [fileName, setFileNameArr] = useState('')
    
    return (
        <form className="add-post-form">
        
        <Input
            type='text'
            id='input-title'
            name='input-1'
            label='Title'
            placeholder='Post Title'
            isRequired={true}
            error='Title is a required field'
            isEnable={true}
            isEmpty={titleText === '' ? true : false}
            isValid={true}
            callback={(e: any) => setTitleText(e.target.value)}
        />

        <Input
            type='number'
            id='input-lesson'
            name='add-post-input-2'
            label='Lesson number'
            placeholder=''
            isRequired={false}
            isEnable={true}
            isEmpty={lessonText === '' ? true : false}
            isValid={true}
                callback={(e: any) => {
                    console.log(e.target.value)
                    if (Number(e.target.value) >= 0) {
                        setLessonText(e.target.value)
                    } else setLessonText('0')
                }}
        />
        <div className="input-file-wrapper">
            <p className="input-file-text">Image</p>
            <span className="input-text" >{fileName}</span> 
                <input type="file" className="input" id="input-file" onChange={(e) => {
                    e.target.files? setFileNameArr(e.target.files[0].name): setFileNameArr('')
            }}/> 
            <label htmlFor="input-file" className="input-file__label" >Upload new</label>
                
        </div>  
            
        <TextArea
            className='textarea'
            label='Description'
            placeholder='Add Your Text'
            isEnable={true}
            rows={3}
            callback={(e: any) => setDescriptionText(e.target.value)}
        />
        
        <TextArea
            className='textarea'
            label='Text'
            placeholder='Add Your Text'
            isEnable={true}
            rows={7}
            callback={(e: any) => setPostText(e.target.value)}
        />

        <footer className="add-post-form__footer">
            <Link to={'/posts'} className="delete-post-link" style={{textDecoration:'none'}}>
                <span>Delete post</span>
                </Link>
            <div className="divider"></div>
            <Link to={'/posts'} style={{textDecoration:'none'}}>
                <Button
                className='button button--add-post-cancel'
                content='Cancel'
                isActive={true}
                callback={(e:any) => {
                    e.preventDefault()
                    // signIn(emailText,passwordText)
                }} />
            </Link>
                
            <Link to={'/posts'} style={{textDecoration:'none'}}>
                <Button
                className='button button--add-post-submit'
                content='Add post'
                isActive={true}
                callback={(e:any) => {
                    e.preventDefault()
                    // signIn(emailText,passwordText)
                }} />
            </Link>
                
        </footer>
        </form>
    )
}

export default AddPostForm