using System;
using System.ComponentModel.DataAnnotations;

namespace SDWebService.Models
{
   public class Usuario
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime DataNascimento{get;set;}
    }
}
