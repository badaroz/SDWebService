import { Usuario } from './usuario';

export class Post {
    public Id: number;
    public Conteudo: string;
    public IdUsuario: number;
    public Usuario: Usuario;
}