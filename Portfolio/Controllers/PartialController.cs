﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class PartialController : Controller
    {
        //
        // GET: /Partial/

        public ActionResult Home()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }

    }
}
