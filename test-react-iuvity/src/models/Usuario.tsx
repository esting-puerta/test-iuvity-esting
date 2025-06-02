export type Usuario = {
    name: {
        title: string;
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    phone: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
    login: {
        username: string;
    };
    registered: {
        date: '',
    };
};

