export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}
export const users: User[] = [
    {
        id: 1,
        name: "Admin user",
        email: "admin@minefeet.com",
        password: "admin123",
        role: "ADMIN",
    },
    {
        id: 2,
        name: "Supervisor",
        email: "supervisor@minefeet.com",
        password: "supervisor123",
        role: "SUPWRVISOR",
    },
];