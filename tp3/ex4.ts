interface User {
    readonly id: number;
    name: string;
    email?: string;
    isAdmin: boolean;
}

const user1: User = {
    id: 1,
    name: "Zara",
    isAdmin: true
};

interface Admin extends User {
    permissions: string[];
}
