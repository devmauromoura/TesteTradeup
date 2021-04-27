import { IEndpoint } from "./typescript";

export const end: IEndpoint = {
    login: () => '/login',
    users: (page?: string) => page ? `/users?page=${page}` : '/users'
}