import axios from "axios";


const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export const fetchUser = () => {
    return api.get("/users");
}

export const fetchPost = () => {
    return api.get("/posts");
}

// export const deletePost = () => {
//     return api.delete("/2");
// }
    
