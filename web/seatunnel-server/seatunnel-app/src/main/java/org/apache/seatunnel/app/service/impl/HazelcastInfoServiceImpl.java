package org.apache.seatunnel.app.service.impl;

import org.apache.seatunnel.app.service.IHazelcatInfoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hazelcast.core.HazelcastInstance;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class HazelcastInfoServiceImpl extends SeatunnelBaseServiceImpl
        implements IHazelcatInfoService {

    private final HazelcastInstance hazelcastInstance;

    @Autowired
    public HazelcastInfoServiceImpl(HazelcastInstance hazelcastInstance) {
        this.hazelcastInstance = hazelcastInstance;
    }

    public List<String> getClusterMemberDetails() {
        return hazelcastInstance.getCluster().getMembers().stream()
                .map(member -> member.getAddress().toString())
                .collect(Collectors.toList());
    }
}
