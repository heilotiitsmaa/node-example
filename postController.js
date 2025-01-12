const posts = [
    {id: 1, title: 'Post 1', body: 'This is post 1'},
    {id: 2, title: 'Post 2', body: 'This is post 2'},
];

/* näide:
export const getPosts = () => posts;
export const teeb automaatselt objektiks("{}""),
st "export default" ei tee objektiks*/

const getPosts = () => posts;
export const getPostslength = () => posts.length; //regular function
export default getPosts; //default export