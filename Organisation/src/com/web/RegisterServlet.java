package com.web;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.dao.Impl.Implementation;

@WebServlet(name="reg" , urlPatterns = "/register")
public class RegisterServlet extends HttpServlet{
		
		private static final long serialVersionUID = 1L;

		@Override
		protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			
			String username = req.getParameter("username");
			String password = req.getParameter("password");
			
			Implementation impl = new Implementation();
			impl.register(username, password);
			
			PrintWriter out = resp.getWriter();
			out.println(" <h2> You're Registered Succcessfully </h2> !!");
			
			RequestDispatcher dispatcher = req.getRequestDispatcher("/login.html");
			dispatcher.forward(req, resp);
			
		}
		
}
	
