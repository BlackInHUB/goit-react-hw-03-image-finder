import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/?key=29241598-085cf323ec0ff8dd3d2a30634&image_type=photo&orientation=horizontal&per_page=12&'

export const getImages = async (value, page) => {
    try {
        const response = await axios.get(`&q=${value}&page=${page}`)

        return response.data;
    }
    catch(error) {
        console.log(error)
    }
}