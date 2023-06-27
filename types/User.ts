export interface User {
    id: string;
    login: string;
    password: string;
    role: roles;
}

enum roles{
    patient,
    doctor
}


