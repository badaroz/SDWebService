using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using SDWebService.Models;
using SDWebService.Repository;

namespace SDWebService.Controllers
{
    [Route("api/[controller]")]
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
                db.Entry(post).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.IdUsuario = new SelectList(db.Usuario, "Id", "Nome", post.IdUsuario);
            return View(post);
        }

        // GET: Post/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Post post = db.Post.Find(id);
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
            Post post = db.Post.Find(id);
            db.Post.Remove(post);
            db.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet]
        public IQueryable<Post> GetByHashTag(string hashTag)
        {
            return db.Post.Where(x => x.Conteudo.Contains(hashTag));
        }
        [HttpGet]
        public IQueryable<Post> GetByUser(int idUsuario)
        {
            return db.Post.Where(x => x.IdUsuario == idUsuario);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
