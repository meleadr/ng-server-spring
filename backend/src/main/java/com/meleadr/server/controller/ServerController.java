package com.meleadr.server.controller;

import com.meleadr.server.model.Server;
import com.meleadr.server.service.ServerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class ServerController {

    @Autowired
    private ServerService serverService;

    /**
     * Create - Add a new server
     * @param server An object server
     * @return The server object saved
     */
    @PostMapping("/server")
    public Server createserver(@RequestBody Server server) {
        return serverService.create(server);
    }


    /**
     * Read - Get one server
     * @param id The id of the server
     * @return An server object full filled
     */
    @GetMapping("/server/{id}")
    public Server getserver(@PathVariable("id") final Long id) {
        Optional<Server> server = serverService.get(id);
        return server.orElse(null);
    }

    /**
     * Read - Get all servers
     * @return - An Iterable object of server full filled
     */
    @GetMapping("/server")
    public Iterable<Server> getservers() {
        return serverService.list();
    }

    /**
     * Update - Update an existing server
     * @param id - The id of the server to update
     * @param server - The server object updated
     * @return
     */
    @PutMapping("/server/{id}")
    public Server updateserver(@PathVariable("id") final Long id, @RequestBody Server server) {
        Optional<Server> e = serverService.get(id);
        if(e.isPresent()) {
            Server currentserver = e.get();
            String name = server.getName();
            if(name != null) {
                currentserver.setName(name);
            }
            String ipAddress = server.getIpAddress();
            if(ipAddress != null) {
                currentserver.setIpAddress(ipAddress);
            }
            return serverService.update(currentserver);
        } else {
            return null;
        }
    }


    /**
     * Delete - Delete an server
     * @param id - The id of the server to delete
     */
    @DeleteMapping("/server/{id}")
    public void deleteServer(@PathVariable("id") final Long id) {
        serverService.delete(id);
    }
}
