using System;
using Microsoft.AspNet.SignalR;
using System.Web;

namespace SignalR.MVC
{
    public class SignalRHub : Hub
    {
        public void Send(bool isRefreshed)
        {
            // BoradCast to all clients
            Clients.All.RefreshList(isRefreshed);
        }
    }
}