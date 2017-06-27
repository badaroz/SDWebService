import { Usuario } from './usuario';

export class Post {
    public id: number;
    public conteudo: string;
    public idUsuario: number;
    public usuario: Usuario;
}