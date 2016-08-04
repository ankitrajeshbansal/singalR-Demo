using SignalR.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SignalR.Api.Repository
{
    public class DevRepository : BaseRepository<DevTest>
    {
        public DevRepository(UnitOfWork unit)
            : base(unit)
        {

        }

        internal bool Submit(DevTest objDevtest)
        {
            try
            {
                if (objDevtest.Id > 0) //Edit
                {
                    DevTest devTestModel = this.SingleOrDefault(objDevtest.Id);
                    if (devTestModel == null)
                        return false;
                    this.Update(objDevtest);
                }
                else //Add
                {
                    this.Insert(objDevtest);
                }
                return true;
            }
            catch (Exception ex) {
                return false;
            }
        }

        internal bool DeleteById(int id)
        {
            try
            {
                DevTest devTestModel = this.SingleOrDefault(id);
                if (devTestModel != null)
                {
                    this.Delete(devTestModel);
                }
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}