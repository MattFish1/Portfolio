﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Portfolio.Controllers
{
    public class WorkController : Controller
    {
        //
        // GET: /Work/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Battleship()
        {
            return View();
        }

        public ActionResult CombatSimulator()
        {
            return View();
        }

        public ActionResult BlackJack()
        {
            return View();
        }

        public ActionResult Hangman()
        {
            return View();
        }
    }
}
