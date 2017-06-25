using SDWebService.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SDWebService.Repository
{
    public class Repository<TEntity> where TEntity : class
    {

        protected AppContext Db;
        protected DbSet<TEntity> DbSet;

        public Repository(AppContext context)
        {
            Db = context;
            DbSet = Db.Set<TEntity>();
        }
        public IQueryable<TEntity> GetAll()
        {
            return DbSet;
        }

        public TEntity GetById(int id)
        {
            return DbSet.Find(id);
        }

        public TEntity Remove(int id)
        {
            var entity = DbSet.Find(id);
            DbSet.Remove(entity);
            return entity;
        }

        public int SaveChanges()
        {
            return Db.SaveChanges();
        }

        public TEntity Update(TEntity obj)
        {
            var entry = Db.Entry(obj);
            DbSet.Attach(obj);
            entry.State = EntityState.Modified;
            return obj;
        }

        public virtual TEntity Adicionar(TEntity obj)
        {
            //Db.Dispose = false;
            var returnObj = DbSet.Add(obj);
            return returnObj;
        }

        public void Dispose()
        {
            Db.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}

