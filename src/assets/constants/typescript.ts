interface IFonts{
    loginTitle: number;
    titles: number;
    normal: number;
    family: string;
}

export default IFonts;

export interface IEndpoint{
    login: () => string;
    users: (page: string) => string;
}