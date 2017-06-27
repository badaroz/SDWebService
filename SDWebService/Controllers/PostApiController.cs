using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using SDWebService.Models;
using SDWebService.Repository;
using System.Web.Script.Serialization;

namespace SDWebService.Controllers
{
    [RoutePrefix("api/Post")]
    public class PostApiController : ApiController
    {
        private Repository<Post> repository = new Repository<Post>(new AppContext());
       
        public IQueryable<Post> Get()
        {
            return repository.GetAll();
        }
       
        public IQueryable<Post> GetByHashTag(string hashTag)
        {          
            return repository.GetAll().Where(x => x.Conteudo.Contains("#" + hashTag));
        }

        public IQueryable<Post> GetByUser(int idUsuario)
        {
            return repository.GetAll().Where(x => x.IdUsuario == idUsuario);
        }

        // GET: api/PostApi/5
        [ResponseType(typeof(Post))]
        public IHttpActionResult Get(int id)
        {
            var post = repository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }

        // PUT: api/PostApi/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Put(int id, Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.Id)
            {
                return BadRequest();
            }

            repository.Update(post);
            repository.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/PostApi
        [ResponseType(typeof(Post))]
        public IHttpActionResult Post(Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            repository.Adicionar(post);
            repository.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        }

        // DELETE: api/PostApi/5
        [ResponseType(typeof(Post))]
        public IHttpActionResult Delete(int id)
        {
            var post = repository.Remove(id);
            if (post != null)
            {               
                repository.SaveChanges();
                return Ok(post);
            }

         
            return NotFound();
           
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                repository.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostExists(int id)
        {
            return repository.GetAll().Count(e => e.Id == id) > 0;
        }
    }
}