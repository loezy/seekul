export interface ModelDefenition {
    name: string;
    sync: "alter" | "force";
    define: any;
}
