package com.ctheroux.cabbage.entities;

import com.ctheroux.cabbage.entities.Player;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "LifeTimeStatBlocks")
@JsonIgnoreProperties(ignoreUnknown = true)
public class LifeTimeStatBlock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "player_id")
    private Player player;

    @JsonProperty("Matches Played")
    @Column
    private int numMatchesPlayed;

    @JsonProperty("Wins")
    @Column
    private int numWins;

    @JsonProperty("Win%")
    @Column
    private String winPercent;

    @JsonProperty("Kills")
    @Column
    private int numKills;

    @JsonProperty("K/d")
    @Column
    private double killDeathRatio;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreationTimestamp
    private Date createdDate;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @UpdateTimestamp
    private Date updatedDate;

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }

    public int getNumMatchesPlayed() {
        return numMatchesPlayed;
    }

    public void setNumMatchesPlayed(int numMatchesPlayed) {
        this.numMatchesPlayed = numMatchesPlayed;
    }

    public int getNumWins() {
        return numWins;
    }

    public void setNumWins(int numWins) {
        this.numWins = numWins;
    }

    public String getWinPercent() {
        return winPercent;
    }

    public void setWinPercent(String winPercent) {
        this.winPercent = winPercent;
    }

    public int getNumKills() {
        return numKills;
    }

    public void setNumKills(int numKills) {
        this.numKills = numKills;
    }

    public double getKillDeathRatio() {
        return killDeathRatio;
    }

    public void setKillDeathRatio(double killDeathRatio) {
        this.killDeathRatio = killDeathRatio;
    }
}
