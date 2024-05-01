package controller;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/Servlet")
public class Servlet extends HttpServlet {
	
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {        
        
        //response.setContentType("text/html");
        //response.getWriter().println("<html><body><h1>Welcome to Student Space!</h1></body></html>");
        
    	response.getWriter().println("<html><body>Hello World !</body></html>");
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

        String action = request.getParameter("action");

        if ("signup".equals(action)) {
            response.sendRedirect("Login.html");
            
        } else if ("login".equals(action)) {
            response.sendRedirect("Intern7eek/StudentSpace.html");
            
        } else {
            response.sendRedirect("Home.html");
        }
    }
}