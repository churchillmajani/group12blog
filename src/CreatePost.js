import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement post creation logic (e.g., send data to backend API)
        console.log('Creating post:', { title, content });
        // Reset form fields
        setTitle('');
        setContent('');
    };

    return (
        <div>
            <section className="create-post-section">
            <h2 className="create-post-header">Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title" className='CreatePost-title'>Title:</label>
                    <input className='CreatePost-title-input'
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className='CreatePost-content'>Content:</label>
                    <textarea className='CreatePost-content-textarea'
                        id="content"
                        value={content}
                        onChange={handleContentChange}
                        required
                    ></textarea>
                </div>
                <button type="Post" className='create-post-button'>Post</button>
            </form>
            </section>
        </div>
    );
};

export default CreatePost;
