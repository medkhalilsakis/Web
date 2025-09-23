async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.slice(0, 5).forEach(post => console.log(post.title));
}

getPosts();