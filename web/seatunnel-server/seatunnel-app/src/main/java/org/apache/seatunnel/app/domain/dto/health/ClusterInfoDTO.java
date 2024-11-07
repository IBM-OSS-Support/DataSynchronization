package org.apache.seatunnel.app.domain.dto.health;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class ClusterInfoDTO {
    private int size;
    private List<String> members;

    // Constructor, getters, and setters
    public ClusterInfoDTO(int size, List<String> members) {
        this.size = size;
        this.members = members;
    }
}
