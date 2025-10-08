let id: number | string = "A123";

type A = {
    id: number;
    name: string;
};

type B = {
    email: string;
};

type AB = A & B;

type Status = "pending" | "done" | "canceled";

let valueUnknown: unknown = "Bonjour";

if (typeof valueUnknown === "string") {
    let length = (valueUnknown as string).length;
    console.log("Length:", length);
}
