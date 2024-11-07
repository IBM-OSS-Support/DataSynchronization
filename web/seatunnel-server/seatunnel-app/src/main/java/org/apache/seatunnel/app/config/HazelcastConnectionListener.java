package org.apache.seatunnel.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.hazelcast.core.HazelcastInstance;
import com.hazelcast.core.LifecycleEvent;
import com.hazelcast.core.LifecycleListener;

@Component
public class HazelcastConnectionListener implements LifecycleListener {

    private volatile boolean isConnected = false;

    @Autowired
    public HazelcastConnectionListener(HazelcastInstance hazelcastInstance) {
        hazelcastInstance.getLifecycleService().addLifecycleListener(this);
    }

    @Override
    public void stateChanged(LifecycleEvent event) {
        System.out.println("Received Hazelcast lifecycle event: " + event.getState());
        switch (event.getState()) {
            case CLIENT_CONNECTED:
                isConnected = true;
                break;
            case CLIENT_DISCONNECTED:
                isConnected = false;
                break;
            default:
                // Handle other states if necessary
                break;
        }
    }

    public boolean isConnected() {
        return isConnected;
    }
}
