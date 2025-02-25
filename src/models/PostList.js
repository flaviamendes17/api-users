class PostList {
    constructor(){
        this.users = [];
    }
    addPost(post){
        this.users.push(post);
    }
    getAllPosts(){
        return this.users;
    }
    getPostById(id){
        const post = this.users.find(post => post.id === id);
        if (!post) throw new Error("Post não encontrado");
        return post;
    }
    updatePost(id, newPost){
        const postIndex = this.users.findIndex(post => post.id === id);
        if (postIndex === -1) throw new Error("Post não encontrado");
        this.users[postIndex] = newPost;
        return newPost;
    }
    deletePost(id){
    this.posts = this.posts.filter(post => post.id !==
    id);
    }
}

module.exports = PostList;