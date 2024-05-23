package Model;
import BD.*;
import java.awt.PageAttributes.MediaType;
import java.util.List;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

@Singleton
@Path("/")
public class Facade {

    @PersistenceContext
    EntityManager em;
    
    @POST
	@Path("/addcompany")
    @Consumes({ "application/json" })
	public Response addCompany(Company p) {
		System.out.println("coucou");
		/*em.persist(p);
		return null;*/
		try {
            em.persist(p);
            return Response.ok().entity("{\"message\": \"Company registered successfully\"}").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                           .entity("{\"message\": \"Error registering company\"}")
                           .build();
        }
	}
    
    @POST
    @Path("/login")
    @Consumes({ "application/json" })
    @Produces({ "application/json" })
    public Response login(LoginRequest loginRequest) {
        System.out.println("coucou");
        // Logique de validation des identifiants
        // Pour l'instant, renvoyons une réponse de succès pour démonstration
        if ("test@example.com".equals(loginRequest.getEmail()) && "password".equals(loginRequest.getPassword())) {
            return Response.ok().entity("{\"message\": \"Utilisateur connecté avec succès\"}").build();
        } else {
            return Response.status(Response.Status.UNAUTHORIZED).entity("Identifiants incorrects").build();
        }
        
//        // Logique de validation des identifiants
//        String mail = loginRequest.getEmail();
//        String password = loginRequest.getPassword();
//        System.out.println("mail : " + mail + " et mdp : " + password);
//        List<User> employeur = em.createQuery("SELECT u FROM User u WHERE u.mail = :mail AND u.password = :password", User.class)
//                                 .setParameter("mail", mail)
//                                 .setParameter("password", password)
//                                 .getResultList();
//
//        if (!employeur.isEmpty() && employeur.size() == 1) {
//            User user = employeur.get(0); // retourne le premier (et seul normalement) utilisateur trouvé
//            // Retourne une réponse de succès avec les détails de l'utilisateur
//            return Response.ok().entity(user).build();
//        } else {
//            // Retourne une réponse non autorisée si aucun utilisateur trouvé
//            return Response.status(Response.Status.UNAUTHORIZED).entity("Identifiants incorrects").build();
//        }
       
    }
}
// Classe pour représenter la requête de connexion
class LoginRequest {
    private String email;
    private String password;

    // Getters et setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
