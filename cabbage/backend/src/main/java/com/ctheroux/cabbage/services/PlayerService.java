package com.ctheroux.cabbage.services;

import com.ctheroux.cabbage.PlayerDTO;
import com.ctheroux.cabbage.entities.LifeTimeStatBlock;
import com.ctheroux.cabbage.entities.Player;
import com.ctheroux.cabbage.entities.PlayerFirst;
import com.ctheroux.cabbage.repos.LifeTimeStatBlockRepository;
import com.ctheroux.cabbage.repos.PlayerRepository;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@Service
public class PlayerService {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    LifeTimeStatBlockRepository lifeTimeStatBlockRepository;

    @Autowired
    StatService statService;

    private static final Logger LOGGER = LogManager.getLogger(PlayerService.class);

    private final String API_KEY = "65162df6-7fe9-411e-a12f-9dc7bdf23309";

    public PlayerDTO lookUpPlayerStats(String playerName, String platform) {

        Player player = null;
        LifeTimeStatBlock lifeTimeStatBlock = null;
        List<Player> players = playerRepository.find(playerName);

        if (players.size() == 0) {
            ResponseEntity<String> response = callPlayerLookup(platform, playerName);
            player = createPlayer(response);
            lifeTimeStatBlock = statService.createLifeTimeStatBlock(player, response);
        } else {
            player = players.get(0);
            lifeTimeStatBlock = lifeTimeStatBlockRepository.findByPlayerId(player.getId()).get(0);
        }

        PlayerDTO playerDTO = new PlayerDTO();
        playerDTO.setPlayer(player);
        playerDTO.setLifeTimeStatBlock(lifeTimeStatBlock);
        return playerDTO;
    }

    private ResponseEntity<String> callPlayerLookup(String platform, String playerName) {
        String requestUrl = "https://api.fortnitetracker.com/v1/profile/" + platform + "/" + playerName;

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Type", "application/json");
        headers.set("TRN-Api-Key", API_KEY);
        headers.set("user-agent", "Mozilla/5.0");
        HttpEntity<String> entity = new HttpEntity<>("empty",headers);

        ResponseEntity<String> response = null;
        try {
            LOGGER.info("Attempting to get player stats for user: {} from url: {}", playerName, requestUrl);
            response = restTemplate.exchange(requestUrl, HttpMethod.GET, entity, String.class);
        } catch (Exception e) {
            LOGGER.error("Exception throw while getting player stats for user: {}", playerName, e);
        }
        return response;
    }

    private Player createPlayer(ResponseEntity<String> response) {
        Player player = null;
        try {
            player = objectMapper.readValue(response.getBody(), Player.class);
            playerRepository.save(player);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return player;
    }
}
