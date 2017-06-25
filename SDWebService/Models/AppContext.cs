using System.Data.Entity;

namespace SDWebService.Models
{
    public class AppContext : DbContext
    {
        public AppContext()
            : base("DefaultConnection")
        {

        }
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Post> Post { get; set; }
    }
}
