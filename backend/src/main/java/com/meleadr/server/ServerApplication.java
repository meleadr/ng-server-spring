package com.meleadr.server;

import com.meleadr.server.enumeration.Status;
import com.meleadr.server.model.Server;
import com.meleadr.server.repository.ServerRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
	/*
	@Bean
	CommandLineRunner runner(ServerRepository serverRepo) {
		return args -> {
			serverRepo.save(new Server(null, "192.168.0.1", "Server 1", "16", "Dedicated", "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png", Status.SERVER_UP));
			serverRepo.save(new Server(null, "192.168.0.2", "Server 2", "8", "App Web", "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png", Status.SERVER_UP));
			serverRepo.save(new Server(null, "192.168.0.3", "Server 3", "4", "Website", "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png", Status.SERVER_UP));
			serverRepo.save(new Server(null, "192.168.0.4", "Server 4", "64", "Mutu", "https://www.freepnglogos.com/uploads/server-png/server-icon-download-icons-17.png", Status.SERVER_UP));
		};
	}
	*/
}
