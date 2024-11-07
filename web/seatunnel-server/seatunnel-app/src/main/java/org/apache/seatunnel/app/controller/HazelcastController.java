package org.apache.seatunnel.app.controller;

import org.apache.seatunnel.app.service.IHazelcatInfoService;
import org.apache.seatunnel.app.thirdparty.engine.SeaTunnelEngineProxy;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hazelcast.core.HazelcastInstance;

import javax.annotation.Resource;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/seatunnel/api/v1/hazelcast")
public class HazelcastController {

    private static final Logger log = LoggerFactory.getLogger(HazelcastController.class);
    @Resource private IHazelcatInfoService hazelcastInfoService;

    @Autowired
    public HazelcastController(IHazelcatInfoService hazelcastInfoService) {
        this.hazelcastInfoService = hazelcastInfoService;
    }

    @Autowired private HazelcastInstance hazelcastInstance;
    @Autowired private JdbcTemplate jdbcTemplate;

    @GetMapping("/cluster/members")
    public ResponseEntity<List<String>> getClusterMembers() {
        List<String> members = hazelcastInfoService.getClusterMemberDetails();
        return ResponseEntity.ok(members);
    }

    @GetMapping("/status")
    public HazelcastStatus getStatus() {
        HazelcastStatus status = new HazelcastStatus();
        status.setClusterSize(hazelcastInstance.getCluster().getMembers().size());

        List<HazelcastNode> nodes =
                hazelcastInstance.getCluster().getMembers().stream()
                        .map(
                                member -> {
                                    HazelcastNode node = new HazelcastNode();
                                    node.setAddress(member.getAddress().toString());
                                    node.setActive(member.isLiteMember());

                                    return node;
                                })
                        .collect(Collectors.toList());
        status.setNodes(nodes);

        return status;
    }

    //    @GetMapping("/all-nodes")
    //    public ResponseEntity<List<String>> getAllNodes() {
    //        List<String> nodes = JobExecutorServiceImpl.getClientClusterMembers();
    //        return ResponseEntity.ok(nodes);
    //    }

    @GetMapping("/all-nodes")
    public ResponseEntity<Map<String, String>> getClusterHealthMetrics() {
        Map<String, String> clusterHealthMetrics =
                SeaTunnelEngineProxy.getInstance().getClusterHealthMetrics();
        return ResponseEntity.ok(clusterHealthMetrics);
    }

    @GetMapping("/all-nodes2")
    public ResponseEntity<String> getAllRunningJobMetricsContent() {
        String clusterHealthMetrics =
                SeaTunnelEngineProxy.getInstance().getAllRunningJobMetricsContent();
        return ResponseEntity.ok(clusterHealthMetrics);
    }

    @GetMapping("/checkDatabaseConnection")
    public ResponseEntity<?> checkDatabaseConnection() {
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            return ResponseEntity.ok("{\"data\":{\"isdatabaseconnected\":true}}");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("{\"data\":{\"isdatabaseconnected\":false}}");
        }
    }
}

class HazelcastStatus {
    private int clusterSize;
    private List<HazelcastNode> nodes;

    // Constructor
    public HazelcastStatus(int clusterSize, List<HazelcastNode> nodes) {
        this.clusterSize = clusterSize;
        this.nodes = nodes;
    }

    public HazelcastStatus() {}

    // Getters and Setters
    public int getClusterSize() {
        return clusterSize;
    }

    public void setClusterSize(int clusterSize) {
        this.clusterSize = clusterSize;
    }

    public List<HazelcastNode> getNodes() {
        return nodes;
    }

    public void setNodes(List<HazelcastNode> nodes) {
        this.nodes = nodes;
    }
}

class HazelcastNode {
    private String address;
    private boolean active;

    // Constructor
    public HazelcastNode(String address, boolean active) {
        this.address = address;
        this.active = active;
    }

    public HazelcastNode() {}

    // Getters and Setters
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
