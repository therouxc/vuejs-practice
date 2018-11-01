package com.ctheroux.cabbage.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.Map;

@JsonIgnoreProperties(ignoreUnknown = true)
public class PlayerFirst {

    private String epicUserHandle;
    private ArrayList<Map<String,String>> lifeTimeStats;

    public PlayerFirst() {

    }

    public String getEpicUserHandle() {
        return epicUserHandle;
    }

    public ArrayList<Map<String,String>> getLifeTimeStats() {
        return lifeTimeStats;
    }

    @Override
    public String toString() {
        return "{epicUserHandle : " + epicUserHandle + ", lifeTimeStats : " + lifeTimeStats.toString() + "}";
    }
}
