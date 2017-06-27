using System.Data.Entity;
using System.Net;
using System.Web.Mvc;
using SDWebService.Models;
using SDWebService.Repository;

namespace SDWebService.Controllers
{  
    public class PostController : Controller
    {

        private Repository<Post> postRepository;
        private Repository<Usuario> usuarioRepository;
        public PostController()
        {
            var db = new AppContext();
            postRepository = new Repository<Post>(db);
            usuarioRepository = new Repository<Usuario>(db);
        }

        // GET: Post
        public ActionResult Index()
        {           
            return View(postRepository.GetAll().Include(p => p.Usuario));
        }

        // GET: Post/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Post post = postRepository.GetById(id.Value);
            if (post == null)
            {
                return HttpNotFound();
            }
            return View(post);
        }

        // GET: Post/Create
        public ActionResult Create()
        {
            ViewBag.IdUsuario = new SelectList(usuarioRepository.GetAll(), "Id", "Nome");
            return View();
        }

        // POST: Post/Create      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(Post post)
        {
            if (ModelState.IsValid)
            {
                postRepository.Adicionar(post);
                postRepository.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.IdUsuario = new SelectList(usuarioRepository.GetAll(), "Id", "Nome", post.IdUsuario);
            return View(post);
        }

        // GET: Post/Edit/5
        public ActionResult Edit(int? id)
        {
            if (!id.HasValue)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Post post = postRepository.GetById(id.Value);
            if (post == null)
            {
                return HttpNotFound();
            }
            ViewBag.IdUsuario = new SelectList(usuarioRepository.GetAll(), "Id", "Nome", post.IdUsuario);
            return View(post);
        }

        // POST: Post/Edit/5      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(Post post)
        {
            if (ModelState.IsValid)
            {
                postRepository.Update(post);
                postRepository.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdUsuario = new SelectList(usuarioRepository.GetAll(), "Id", "Nome", post.IdUsuario);
            return View(post);
        }

        // GET: Post/Delete/5
        public ActionResult Delete(int? id)
        {
            if (!id.HasValue)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Post post = postRepository.GetById(id.Value); ;
            if (post == null)
            {
                return HttpNotFound();
            }
            return View(post);
        }

        // POST: Post/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {

            postRepository.Remove(id);
            postRepository.SaveChanges();
            return RedirectToAction("Index");
        }
          
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                postRepository.Dispose();
                usuarioRepository.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
