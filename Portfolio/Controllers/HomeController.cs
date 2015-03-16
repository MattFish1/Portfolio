using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Portfolio.Models;
using System.Net.Mail;

namespace Portfolio.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }
        
        [HttpPost]
        public bool ContactForm(string name, string email, string number, string message)
        {
          
            try
            {
                SmtpClient mailClient = new SmtpClient("smtp.sendgrid.net", 587);

                mailClient.Credentials = new System.Net.NetworkCredential("Matt_Fish", "Uzeke1911");


                //Create message
                Contact contact = new Contact(); contact.Name = name; contact.Email = email;
                contact.Number = number; contact.Message = message;

                MailMessage MM = new MailMessage("portfolio@me.com", "mattfish490@gmail.com");
                System.Text.StringBuilder sb = new System.Text.StringBuilder();

                sb.AppendLine("Name: " + name);
                sb.AppendLine("Email: " + email);
                sb.AppendLine("Message: " + message);

                MM.Subject = "Portflio Site Message";
                MM.Body = sb.ToString();
                //send Message
                mailClient.Send(MM);

                return true;
            }
            catch { return false; }
      
        }
    }
}
