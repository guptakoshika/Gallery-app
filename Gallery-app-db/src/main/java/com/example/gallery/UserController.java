package com.example.gallery;



import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/gallery")
public class UserController {

	@RequestMapping(method=RequestMethod.POST,value="/create")
	public void saveUser(@RequestBody User userobj) {
		System.out.println("in func");
		Configuration cfg =new Configuration();
		cfg.configure();
		SessionFactory sessionFactory=cfg.buildSessionFactory();
		Session session=sessionFactory.openSession();
		Transaction tx=	session.beginTransaction();
		session.save(userobj);
		tx.commit();
		session.close();
        sessionFactory.close(); 
	}
	
	@RequestMapping(method=RequestMethod.DELETE,value="/{id}/delete")
	public void deleteUser(@PathVariable("id")  int id) {
		System.out.println("ghjhgjhghjghjghjh");
		Configuration cfg =new Configuration();
		cfg.configure();
		
		SessionFactory sessionFactory=cfg.buildSessionFactory();
		Session session=sessionFactory.openSession();
		Transaction tx=	session.beginTransaction();
		
		 User o=(User) session.load(User.class,new Integer(id));
		 session.delete(o);
		 tx.commit();
	        session.close();
	        sessionFactory.close();
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/{username}/{password}/login")
	public boolean loginUser(@PathVariable("username") String user , @PathVariable("password") String pswd ) {
		System.out.println("usernmame as p   " + user);
		Configuration cfg =new Configuration();
		cfg.configure();
		
		SessionFactory sessionFactory=cfg.buildSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction tx=	session.beginTransaction();
		
		Query query = session.createQuery("from User where password='"+pswd+"'");
        User u= (User)query.uniqueResult();
      
        if(user.equals(u.getUsername()))
        {
        	return true;
        }
          System.out.println("username from hibernate " + u.getUsername());
        tx.commit();
	    session.close();
	    sessionFactory.close();
	    return false;
	}
}