import { Usuario } from "./usuario";

export class Postagem {
    idPostagem: number;
    usuario: Usuario;
    titulo: string;
    destino: string;
    locais: string;
    descricao: string;
    fotos: Array<string>;
    comentarios : Array<string>;
    likes: Array<string>;
}