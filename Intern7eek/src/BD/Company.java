package BD;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity
public class Company {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    private String reference;
    private String name;
    private String description;
    
    @ManyToMany
    private Collection<Domain> domain;
    
    @OneToMany
    private Collection<Comment> comments;

	public Company() {
		super();
	}

	public Company(String reference, String name, String description) {
		super();
		this.reference = reference;
		this.name = name;
		this.description = description;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Collection<Domain> getDomain() {
		return domain;
	}

	public void setDomain(Collection<Domain> domain) {
		this.domain = domain;
	}
	
	public Collection<Comment> getComments() {
		return comments;
	}

	public void setComments(Collection<Comment> comments) {
		this.comments = comments;
	}
    
    
}
