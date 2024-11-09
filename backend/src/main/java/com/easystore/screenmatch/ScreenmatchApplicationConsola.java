package com.easystore.screenmatch;

import com.easystore.screenmatch.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;

@SpringBootApplication
public class ScreenmatchApplicationConsola implements CommandLineRunner{
	@Autowired
	private ClienteService cliente;

	public static void main(String[] args) {
		SpringApplication.run(ScreenmatchApplicationConsola.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		cliente.agregarCliente();
	}
}
