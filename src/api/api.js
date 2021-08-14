import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY":"ffc43811-5015-4b84-bc72-c51849e95633",
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollowUser(userID = 1) {
        return instance.delete(`follow/${userID}`).then(response => response.data.resultCode);
    },

    followUser(userID = 1) {
        return instance.post(`follow/${userID}`).then(response => response.data.resultCode);
    }
}

export const headerAPI = {
    setAuthData(){
        return instance.get("auth/me").then(response => response.data);
    }
}

export const profileAPI = {
    setProfile(userID){
        return instance.get(`profile/${userID}`).then(response => response.data);
    },

    getStatus(userID){
        return instance.get(`profile/status/${userID}`);
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status});
    }
}

