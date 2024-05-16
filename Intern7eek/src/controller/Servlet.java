package controller;

import java.io.IOException;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import BD.User;

@WebServlet("/Servlet")
public class Servlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        setCorsHeaders(response);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().println("<html><body>Hello World !</body></html>");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        setCorsHeaders(response);
        response.setStatus(HttpServletResponse.SC_OK);

        String email = request.getParameter("email");
        String password = request.getParameter("password");

        // Votre logique d'authentification ici
        boolean isValidUser = authenticateUser(email, password);

        if (isValidUser) {
            // Authentification réussie, redirigez l'utilisateur vers une page de succès
            response.sendRedirect("success.html");
        } else {
            // Authentification échouée, redirigez l'utilisateur vers une page d'échec
            response.sendRedirect("Home.html");
        }
    }

    @Override
    protected void doOptions(HttpServletRequest request, HttpServletResponse response) throws IOException {
        setCorsHeaders(response);
        response.setStatus(HttpServletResponse.SC_OK);
    }

    private void setCorsHeaders(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
        response.setHeader("Access-Control-Allow-Credentials", "true");
    }

    private boolean authenticateUser(String mail, String password) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("YourPersistenceUnitName");
        EntityManager em = emf.createEntityManager();

        try {
            TypedQuery<User> query = em.createQuery("SELECT u FROM User u WHERE u.mail = :mail", User.class);
            query.setParameter("mail", mail); // Utilisez "mail" au lieu de "email"
            List<User> users = query.getResultList(); // Utilisez getResultList() pour obtenir une liste de résultats

            // Vérifiez si des utilisateurs correspondent à l'email donné
            if (!users.isEmpty()) {
                User user = users.get(0); // Obtenez le premier utilisateur correspondant à l'email
                // Vérifiez si le mot de passe correspond
                if (user.getPassword().equals(password)) {
                    return true;
                }
            }
        } catch (NoResultException e) {
            // L'utilisateur n'existe pas dans la base de données
        } finally {
            em.close();
            emf.close();
        }

        return false;
    }
}
