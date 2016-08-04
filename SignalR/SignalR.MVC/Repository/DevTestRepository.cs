using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using SignalR.MVC.Models;

namespace SignalR.MVC.Repository
{
    //DevTest repository class to perform the CRUD operations
    public class DevTestRepository
    {
        internal IEnumerable<DevTest> Get()
        {
            using (var _dbContext = new SignalRContext())
            {
                return _dbContext.DevTests.ToList();
            }
        }

        internal DevTest GetById(int id)
        {
            using (var _dbContext = new SignalRContext())
            {
                return _dbContext.DevTests.FirstOrDefault(p=>p.Id== id);
            }
        }

        //Add or Edit DevTest
        internal bool Submit(DevTest objDevtest)
        {
            if (objDevtest.Id > 0) //Edit
            {
                DevTest devTestModel;
                using (var _dbContext = new SignalRContext())
                {
                    devTestModel = _dbContext.DevTests.FirstOrDefault(p => p.Id == objDevtest.Id);
                    if (devTestModel == null)
                        return false;
                }
                using (var _dbContext = new SignalRContext())
                {
                    _dbContext.Entry(objDevtest).State = System.Data.Entity.EntityState.Modified;
                    if (_dbContext.SaveChanges() > 0)
                        return true;
                }
            }
            else //Add
            {
                using (var _dbContext = new SignalRContext())
                {
                    _dbContext.DevTests.Add(objDevtest);
                    if (_dbContext.SaveChanges() > 0)
                        return true;
                }
            }
            return false;
        }

        internal bool DeleteById(int id)
        {
            using (var _dbContext = new SignalRContext())
            {
                var devtestModel = _dbContext.DevTests.FirstOrDefault(p => p.Id == id);
                if (devtestModel != null)
                {
                    _dbContext.DevTests.Remove(devtestModel);
                    if (_dbContext.SaveChanges() > 0)
                        return true;
                }
            }
            return false;
        }
    }
}