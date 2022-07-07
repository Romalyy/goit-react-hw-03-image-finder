import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    
    params: {
        key: "27881359-28bce0b6d1f80a2aeb9da9959",
        per_page: 12,
        orientation: "horizontal",
        image_type: "photo",
    },
})

export const getPhotos = async (q, page = 1) => {
    const {data} = await instance("/", {
        params: {
            page,
            q,
        },
    });
    return data;
}

export const searchPosts = async (q, page = 1) => {
    const {data} = await instance("/", {
        params: {
            q,
            page
        }
    });
    return data;
}