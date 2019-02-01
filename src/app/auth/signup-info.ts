export class SignUpInfo {
    name: string;
    surname: string;
    username: string;
    indeks: number;
    grupa: number;
    email: string;
    role: string[];
    password: string;

    constructor(name: string, surname: string, username: string, indeks: number, grupa: number, email: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.indeks = indeks;
        this.grupa = grupa;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
