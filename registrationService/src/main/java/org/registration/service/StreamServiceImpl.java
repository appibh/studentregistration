package org.registration.service;

import org.registration.dao.StreamDao;
import org.registration.model.Stream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("streamService")
public class StreamServiceImpl implements StreamService {

	@Autowired
	private StreamDao streamDao;
	
	@Override
	public void createStream(Stream stream) {
		//streamDao.createStream(stream);
		System.out.println(stream.getName());
		System.out.println(stream.getCreatedDate());
		
	}

}
