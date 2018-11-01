package com.ctheroux.cabbage.controllers;

import com.ctheroux.cabbage.PlayerDTO;
import com.ctheroux.cabbage.entities.Player;
import com.ctheroux.cabbage.entities.PlayerFirst;
import com.ctheroux.cabbage.repos.PlayerRepository;
import com.ctheroux.cabbage.services.PlayerService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PlayerController {

    @Autowired
    private PlayerService playerService;

    @Autowired
    private PlayerRepository playerRepository;

    private static final Logger LOGGER = LogManager.getLogger(PlayerController.class);

    private String apiKey = "d7729252-ab9e-451b-8666-22425a2545f3";

    @RequestMapping(value = "/stat/{playerName}", method = RequestMethod.GET)
    public PlayerDTO cool(@PathVariable("playerName") String playerName) {
        LOGGER.info("/stat/{playerName} endpoint hit");
        return playerService.lookUpPlayerStats(playerName, "pc");
    }

    @RequestMapping(value = "/manualAdd/{playerName}", method = RequestMethod.GET)
    public void createPlayer(@PathVariable("playerName") String playerName) {
        LOGGER.info("creating player in db: " + playerName);
        Player fortnitePlayer = new Player(playerName, "pc");
        playerRepository.save(fortnitePlayer);
    }
}
