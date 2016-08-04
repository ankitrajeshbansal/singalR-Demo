using SignalR.MVC.Models;
using SignalR.MVC.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SignalR.MVC.Controllers
{
    public class DevTestController : Controller
    {
        private DevTestRepository objDevTestRepository;
        // GET: DevTest
        public ActionResult Index()
        {
            objDevTestRepository = new DevTestRepository();
            return View(objDevTestRepository.Get());
        }

        public ActionResult List()
        {
            objDevTestRepository = new DevTestRepository();
            return PartialView("_List", objDevTestRepository.Get());
        }

        public ActionResult Detail(int id)
        {
            objDevTestRepository = new DevTestRepository();
            return View(objDevTestRepository.GetById(id));
        }
        
        [HttpPost]
        public ActionResult Detail(DevTest _objDev)
        {
            objDevTestRepository = new DevTestRepository();            
            return Json(objDevTestRepository.Submit(_objDev));
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            objDevTestRepository = new DevTestRepository();
            return Json(objDevTestRepository.DeleteById(id));
        }
    }
}