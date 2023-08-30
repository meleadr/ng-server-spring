package com.meleadr.server.service;

import com.meleadr.server.enumeration.Status;
import com.meleadr.server.model.Server;
import com.meleadr.server.repository.ServerRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.InetAddress;
import java.util.Optional;

@Data
@Service
public class ServerService {
    @Autowired
    private ServerRepository serverRepository;
    public Server create(Server server){
        return serverRepository.save(server);
    }
    public Iterable<Server> list(){
        return serverRepository.findAll();
    }
    public Optional<Server> get(Long id){
     return serverRepository.findById(id);
    }
    public Server update(Server server){
        return serverRepository.save(server);
    }
    public void delete(Long id){
        serverRepository.deleteById(id);
    }

    public Server getByIp(String ipAddress) {
        return serverRepository.findByIpAddress(ipAddress);
    }
    public Server ping(String ipAddress) throws IOException{
        Server server = serverRepository.findByIpAddress(ipAddress);
        InetAddress inetAddress = InetAddress.getByName(ipAddress);
        server.setStatus(inetAddress.isReachable(1000) ? Status.SERVER_UP : Status.SERVER_DOWN);
        serverRepository.save(server);
        return server;
    }
}
