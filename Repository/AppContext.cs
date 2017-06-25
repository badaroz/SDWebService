using System.Data.Entity;

namespace Repository
{
    public class AppContext : DbContext
    {
        public AppContext()
            : base("DefaultConnection")
        {

        }
    }
}
