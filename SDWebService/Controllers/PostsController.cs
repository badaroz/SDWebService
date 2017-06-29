﻿using System;
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
using System.Data.Entity;

namespace SDWebService.Controllers
{
    public class PostsController : ApiController
    {
        private Repository<Post> repository = new Repository<Post>(new AppContext());
       
        public IQueryable<Post> Get()
        {
            return repository.GetAll().Include(x=> x.Usuario);
        }

        [Route("api/Usuarios/filtro/{hashTag}")]
        public IQueryable<Post> GetByHashTag(string hashTag)
        {          
            return repository.GetAll().Where(x => x.Conteudo.Contains("#" + hashTag)).Include(x => x.Usuario);
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

        [Route("api/Usuarios/{id}/Posts")]
        [ResponseType(typeof(List<Post>))]
        public IHttpActionResult GetPostsUsuario(int id)
        {

            var post = repository.GetAll().Where(x => x.IdUsuario == id).Include(x => x.Usuario).ToList<Post>();
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
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