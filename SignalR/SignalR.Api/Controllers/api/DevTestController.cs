using SignalR.Api.Models;
using SignalR.Api.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace SignalR.Api.Controllers
{
    //Allow to cross domain request
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class DevTestController : ApiController
    {
        //DevTest repository class object to perform the CRUD operations
        private UnitOfWork uow = null;
        private DevRepository devtestRepo = null;
        public DevTestController()
        {

            uow = new UnitOfWork();
            devtestRepo = new DevRepository(uow);
        }
        // GET: api/DevTest
        public IEnumerable<DevTest> Get()
        {
            return devtestRepo.GetAll();
        }

        // GET: api/DevTest/5
        public DevTest Get(int id)
        {
            return devtestRepo.Single(id);
        }

        // POST: api/DevTest
        public bool Post(DevTest devtest)
        {
            return devtestRepo.Submit(devtest);
        }

       
        // DELETE: api/DevTest/5
        public bool Delete(int id)
        {
            return devtestRepo.DeleteById(id);
        }
    }
}
