using Microsoft.AspNet.Mvc;

namespace Verzuimregistratie.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }       
    }
}
