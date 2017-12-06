using EmployeeAPIService2.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace EmployeeAPIService2.Controllers
{
    public class EmployeesController : ApiController
    {
      
        public IEnumerable<Employee> Get()
        {
            using (jqueryDemoDbEntities e =new jqueryDemoDbEntities())
            {
                
                return e.Employees.ToList();
            }
        }

        public Employee Get(string code)
        {
            using (jqueryDemoDbEntities e=new jqueryDemoDbEntities())
            {
                return e.Employees.FirstOrDefault(emp => emp.code == code);
            }
        }
    }
}
