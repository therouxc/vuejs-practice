package com.ctheroux.cabbage.repos;

import com.ctheroux.cabbage.entities.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PlayerRepository extends JpaRepository<Player, Long> {

    List<Player> findByName(String name);

    @Query("SELECT p FROM Player p WHERE LOWER(p.name) = LOWER(:name)")
    List<Player> find(@Param("name") String name);
}
