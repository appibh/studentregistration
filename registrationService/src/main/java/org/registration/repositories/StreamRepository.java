package org.registration.repositories;

import org.registration.model.Stream;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StreamRepository extends MongoRepository<Stream, String> {

}
