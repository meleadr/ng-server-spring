package com.meleadr.server.repository;

import com.meleadr.server.model.Server;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServerRepository extends CrudRepository<Server, Long> {
    Server findByIpAddress(String ipAddress);
}
