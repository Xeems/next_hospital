export interface User {
    id: number;
    login: string;
    password: string;
    role: roles;
}

enum roles{
    doctor,
    patient
}