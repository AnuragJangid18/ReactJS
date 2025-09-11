const NewPost = ({
    handleSubmit, postTitle, setPostTitle, postBody, setPostBody
}) => {
    return (
        <main className="NewPost">
            <h2>Create a New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    aria-label="Post title"
                />
                <label htmlFor="postBody">Post Content:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    aria-label="Post content"
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default NewPost;
