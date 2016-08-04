using SignalR.Api.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Transactions;
using System.Web;

namespace SignalR.Api.Repository
{
    public class UnitOfWork 
    {
        private TransactionScope _transaction;
        private readonly SignalRContext _db;


        public UnitOfWork()
        {
            _db = new SignalRContext();

        }

        public void Dispose()
        {

        }

        public void StartTransaction()
        {

            _transaction = new TransactionScope();
        }

        public void Commit()
        {
            _db.SaveChanges();
            _transaction.Complete();
        }

        public DbContext Db
        {
            get { return _db; }
        }



    }
}