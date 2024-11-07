/*
 * Licensed to the IBM Software Labs under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The IBM Software Labs licenses this file to You under the IBM Software Labs, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "IBM Software Labs" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { axios } from '@/service/service';

const API_URL = 'hazelcast';

interface ClusterStatusResponse {
  clusterState: string;
  clusterSize: number;
  nodes: { id: string, status: string }[];
  migrationQueueSize: number;
  connectionCount: number;
  allConnectionCount: number;
}

interface ClusterMembersResponse {
  members: { id: string, address: string, status: string }[];
}

interface DatabaseConnectionResponse {
  data: {
    isdatabaseconnected: boolean;
  };
}

const getAuthHeaders = () => {
    const token = localStorage.getItem('auth_token'); // Retrieve the token from local storage or other secure place
    return {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    };
};

export const getClusterStatus = () => {
return axios.get(`${API_URL}/status`, {
    headers: getAuthHeaders(),
});
};

export const getClusterMembers = () => {
return axios.get(`${API_URL}/cluster/members`, {
    headers: getAuthHeaders(),
});
};

export const checkDatabaseConnection = async () => {
  try {
    const response = await axios.get(`${API_URL}/checkDatabaseConnection`, {
      headers: getAuthHeaders()
    });
    return response;
  } catch (error) {
    console.error("Error fetching database connection:", error);
    throw error;
  }
};

export const getClusterHealthMetrics = () => {
  return axios.get(`${API_URL}/all-nodes`, {
    headers: getAuthHeaders(),
  });
};

export const getAllRunningJobMetricsContent = () => {
  return axios.get(`${API_URL}/all-nodes2`, {
    headers: getAuthHeaders(),
  });
};
