using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SDWebService.Models
{
    public class Post
    {
        [Key]
        public int Id { get; set; }
        [MaxLength(140)]
        public string Conteudo { get; set; }
        public int IdUsuario { get; set; }
        [ForeignKey("IdUsuario")]
        public Usuario Usuario { get; set; }
    }
}
