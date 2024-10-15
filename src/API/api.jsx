import axios from "axios";


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUser = () => {
    return api.get("/users");
}

export const fetchPost = (pageNumber) => {
    return api.get(`/posts?_start=${pageNumber}&_limit=6`);
}

export const deletePost = (id) => {
    return api.delete(`/posts/${id}`);
}

export const fetchGithubUser = async ({ pageParam = 1 }) => {
    try {
        const res = await axios.get(`https://api.github.com/users?per_page=12&pages=${pageParam}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
