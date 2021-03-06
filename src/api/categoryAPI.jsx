import instance from "./instance";

export const createCate = (category) => {
    const url = "/categories";
    return instance.post(url, category);
};
export const listCate = () => {
    const url = "/categories";
    return instance.get(url);
};
export const readCate = (id) => {
    const url = "/categories/" + id;
    return instance.get(url);
};
export const removeCate = (id) => {
    const url = "/categories/" + id;
    return instance.delete(url);
};
export const updateCate = (category) => {
    const url = "/categories/" + category.id;
    return instance.put(url, category);
};