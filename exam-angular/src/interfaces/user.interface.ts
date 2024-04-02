export interface User {
    email: string,
    password: string,
    username: string | null,
    rePass: string | null,
    accessToken: string | null
}

export interface UserForAuth {
    email: string,
    username: string,
    password: string,
    accessToken: string,
    userId: string
}