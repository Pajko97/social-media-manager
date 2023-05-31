interface Json {
    success: boolean;
    data: any[];
}


interface UserType {
    first_name: string;
    last_name: string;
    id: string;
    last_online: Date;
    last_posted: Date;
}

interface PassportUserType {
    first_name: string;
    last_name: string;
    id: string;
}

interface GoogleProfileMails {
    value: string;
}
interface GoogleProfile {
    emails:[{ value: string; }];
    id: string;
}

interface Post {
    comments: string[]
}