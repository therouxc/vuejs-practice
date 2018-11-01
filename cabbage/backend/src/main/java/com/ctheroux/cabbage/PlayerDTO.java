package com.ctheroux.cabbage;

import com.ctheroux.cabbage.entities.LifeTimeStatBlock;
import com.ctheroux.cabbage.entities.Player;

public class PlayerDTO {

    private Player player;
    private LifeTimeStatBlock lifeTimeStatBlock;

    public PlayerDTO() {

    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public LifeTimeStatBlock getLifeTimeStatBlock() {
        return lifeTimeStatBlock;
    }

    public void setLifeTimeStatBlock(LifeTimeStatBlock lifeTimeStatBlock) {
        this.lifeTimeStatBlock = lifeTimeStatBlock;
    }
}
