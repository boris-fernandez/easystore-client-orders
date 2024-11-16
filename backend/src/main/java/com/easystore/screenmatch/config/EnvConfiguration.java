package com.easystore.screenmatch.config;
import io.github.cdimascio.dotenv.Dotenv;
import jakarta.annotation.PostConstruct;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties
public class EnvConfiguration {
    @PostConstruct
    public void loadEnvVariables() {
        Dotenv dotenv = Dotenv.configure().load();

        String dbHost = dotenv.get("DB_HOST");
        String dbUser = dotenv.get("DB_USER");
        String dbPassword = dotenv.get("DB_PASSWORD");

        if (dbHost == null || dbUser == null || dbPassword == null) {
            throw new IllegalStateException("Missing required environment variables in .env file");
        }

        System.setProperty("DB_HOST", dbHost);
        System.setProperty("DB_USER", dbUser);
        System.setProperty("DB_PASSWORD", dbPassword);
    }
}
