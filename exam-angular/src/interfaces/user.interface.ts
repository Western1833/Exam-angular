export interface User {
    email: string,
    password: string,
    username: string | null,
    rePass: string | null,
    accessToken: string | null
}