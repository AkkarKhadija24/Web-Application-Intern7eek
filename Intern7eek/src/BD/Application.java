package BD;
import java.util.Collection;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Application {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idApplication;
	private int idUser;
	private Date date;
	private String state;
	
	@ManyToMany
    private Collection<Domain> domain;
	
	@OneToMany
	private Collection<User> users;
	public Application () {
		super();
	}
	
	public Application(int idUser,Date date,String state) {
		super();
		this.idUser = idUser;
		this.date = date;
		this.state = state;
	}
	
	public int getIdApplication() {
		return idApplication;
	}

	public void setIdApplication(int idApplication) {
		this.idApplication = idApplication;
	}
	
	public int getIdUser() {
        return idUser;
    }

    public void setIdUser(int idUser) {
        this.idUser = idUser;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public Collection<Domain> getDomain() {
        return domain;
    }

    public void setDomain(Collection<Domain> domain) {
        this.domain = domain;
    }
    
    public Collection<User> getUsers() {
        return this.users;
    }

    public void setUsers(Collection<User> users) {
        this.users = users;
    }
}
