package com.ctheroux.cabbage.repos;

import com.ctheroux.cabbage.entities.LifeTimeStatBlock;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface LifeTimeStatBlockRepository extends CrudRepository<LifeTimeStatBlock, Long> {

    List<LifeTimeStatBlock> findByPlayerId(Long playerId);
}
