package registrationService;

import org.registration.dao.FacultyDao;
import org.registration.dao.StreamDao;
import org.registration.model.Faculty;
import org.registration.model.Stream;
import org.registration.serviceconfig.ServiceConfiguration;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class ServiceConfigTest {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext ac = new AnnotationConfigApplicationContext(ServiceConfiguration.class);
		FacultyDao facultyDao = ac.getBean(FacultyDao.class);
//		Faculty faculty = new Faculty();
//		faculty.setId("joemar");
//		faculty.setName(new Name("joe", "Marini", null));
//		faculty.getAddresses().add(new Address("111 Main St", "Coppell", "TX", "USA", "75054"));
//		facultyDao.createFaculty(faculty);
		
		Faculty fm = facultyDao.findFaculty("joemar");
		StreamDao streamDao = ac.getBean(StreamDao.class);
//		List<Course>courses = new ArrayList<Course>();
//		Course course = new Course();
//		course.setCourseId("CSE101");
//		course.setCourseName("Fundementals of Computer Science");
//		course.setFacultyMember(fm);
//		courses.add(course);
//		
//		Stream stream = new Stream();
//		stream.setName("CSE");
//		stream.setCourses(courses);
//		streamDao.createStream(stream);
		
		Stream stream = streamDao.findStream("CSE");
		System.out.println(stream.getName());
		stream.getCourses().forEach(System.out :: println);
		
		ac.close();

	}
}
