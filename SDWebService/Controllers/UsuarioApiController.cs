using System.Data;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using SDWebService.Models;
using SDWebService.Repository;
using System.Web.Http.Cors;

namespace SDWebService.Controllers
{   
    [RoutePrefix("api/UsuarioApi")]
    public class UsuarioApiController : ApiController
    {
        //private AppContext db = new AppContext();
        private Repository<Usuario> usuarioRepository = new Repository<Usuario>(new AppContext());
        // GET: api/Usuarios
        public IQueryable<Usuario> GetUsuario()
        {
            return usuarioRepository.GetAll();
        }
        [Route("GetLast")]
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult GetLast()
        {
            return Ok(usuarioRepository.GetAll().OrderByDescending(x => x.Id).FirstOrDefault());
        }

        // GET: api/Usuarios/5
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult Get(int id)
        {
            Usuario usuario = usuarioRepository.GetById(id);
            if (usuario == null)
            {
                return NotFound();
            }

            return Ok(usuario);
        }

        // PUT: api/Usuarios/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Put(int id, Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != usuario.Id)
            {
                return BadRequest();
            }
            usuarioRepository.Update(usuario);
            usuarioRepository.SaveChanges();
            
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Usuarios
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult Post(Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            usuarioRepository.Adicionar(usuario);
            usuarioRepository.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = usuario.Id }, usuario);
        }

        // DELETE: api/Usuarios/5
        [ResponseType(typeof(Usuario))]
        public IHttpActionResult Delete(int id)
        {
            Usuario usuario = usuarioRepository.GetById(id);
            if (usuario == null)
            {
                return NotFound();
            }

            usuarioRepository.Remove(id);
            usuarioRepository.SaveChanges();

            return Ok(usuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                usuarioRepository.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UsuarioExists(int id)
        {
            return usuarioRepository.GetAll().Count(e => e.Id == id) > 0;
        }
    }
}