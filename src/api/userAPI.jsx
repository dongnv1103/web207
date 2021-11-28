import instance from "./instance";

export const create = (user) => {
    const url = "/users";
    return instance.post(url, user);
};
export const list = () => {
    const url = "/users";
    return instance.get(url);
};
export const read = (id) => {
    const url = "/users/" + id;
    return instance.get(url);
};
export const remove = (id) => {
    const url = "/users/" + id;
    return instance.delete(url);
};
export const update = (user) => {
    const url = "/users/" + user.id;
    return instance.put(url, user);
};