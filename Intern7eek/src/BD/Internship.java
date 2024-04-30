package BD;

import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Internship {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    private String title;
    private String description;
    private String localization;
    private String date;
    
    @ManyToMany
    private Collection<Domain> domain;
    
    @OneToMany
    private Collection<Application> applications;
    
    @ManyToOne
    private Company company;
    
	public Internship() {
		super();
	}

	public Internship(String title, String description, String localization, String date) {
		super();
		this.title = title;
		this.description = description;
		this.localization = localization;
		this.date = date;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getLocalization() {
		return localization;
	}

	public void setLocalization(String localization) {
		this.localization = localization;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Collection<Domain> getDomain() {
		return domain;
	}

	public void setDomain(Collection<Domain> domain) {
		this.domain = domain;
	}

	public Collection<Application> getApplications() {
		return applications;
	}

	public void setApplications(Collection<Application> applications) {
		this.applications = applications;
	}

	public Company getCompany() {
		return company;
	}

	public void setCompany(Company company) {
		this.company = company;
	}
    
    
}
