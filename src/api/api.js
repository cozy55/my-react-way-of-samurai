import * as axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers:{
        "API-KEY": '9fd35b66-3344-449a-96a2-09ef710afaf6'
    }
})

export const usersAPI ={
    getUsers: (currentPage =1, pageSize = 10) =>{
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    follow: (userId) =>{
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unfollow: (userId) =>{
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    getProfile: (userId) =>{
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI ={
    getProfile: (userId) =>{
        return instance.get(`profile/` + userId)
            .then(responce => responce.data)
    },
    getStatus: (userId)=>{
        return instance.get(`profile/status/` + userId)
            .then(responce => responce.data)
    },
    updateStatus: (status)=>{
        return instance.put(`profile/status/`, {status: status})
    }
}

export const authAPI ={
    me: ()=>{
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

