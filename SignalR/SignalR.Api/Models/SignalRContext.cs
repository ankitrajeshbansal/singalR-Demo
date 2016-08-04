using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SignalR.Api.Models
{
    public class SignalRContext:DbContext
    {
        //SignalRConnectionString define into web.config
        public SignalRContext() : base("name=SignalRConnectionString")
        {

        }

        public DbSet<DevTest> DevTests { get; set; }
    }
}