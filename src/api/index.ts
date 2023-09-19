import http from './http'

//登录
interface Ilogin {
    username: string
    password: string
}

export const loginApi = (params: Ilogin) => http.post('/admin/login', params)


//相册左侧

interface Ileft {
    limit: number
    page:number
}

export const leftApi = (params: Ileft) => http.get(`/admin/image_class/${params.page}`,params)

//右侧
interface Iright {
    limit:number
    page:number
    id:number 
}

export const rightApi = (params:Iright)=>http.get('/admin/image_class/'+params.id+'/image/'+params.page,params)

