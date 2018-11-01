package com.ctheroux.cabbage.services;

import com.ctheroux.cabbage.entities.LifeTimeStatBlock;
import com.ctheroux.cabbage.entities.Player;
import com.ctheroux.cabbage.repos.LifeTimeStatBlockRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class StatService {

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    LifeTimeStatBlockRepository lifeTimeStatBlockRepository;

    public LifeTimeStatBlock createLifeTimeStatBlock(Player player, ResponseEntity<String> response) {
        LifeTimeStatBlock lifeTimeStatBlock = null;
        try {
            JsonNode jsonNode = objectMapper.readTree(response.getBody());
            JsonNode statsNode = jsonNode.path("lifeTimeStats");
            String lifeTimeStat = "{";
            for (JsonNode stat: statsNode) {
                String key = stat.path("key").asText();
                String value = stat.path("value").asText();
                lifeTimeStat = lifeTimeStat + "\"" + key + "\":\"" + value + "\",";
            }
            lifeTimeStat = lifeTimeStat + "\"ok\":\"ok\"}";
            lifeTimeStatBlock = objectMapper.readValue(lifeTimeStat, LifeTimeStatBlock.class);
            lifeTimeStatBlock.setPlayer(player);
            lifeTimeStatBlockRepository.save(lifeTimeStatBlock);
            System.out.println(statsNode);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return lifeTimeStatBlock;
    }
}
