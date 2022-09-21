export interface ISelect {
    value: any[];
    onChange: (data: string) => void;
    placeholder?: string;
    searchFilter?: boolean;
    fullWidth?: boolean;
    defaultValue?: string;
}