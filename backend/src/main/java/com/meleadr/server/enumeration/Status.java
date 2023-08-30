package com.meleadr.server.enumeration;

public enum Status {
    SERVER_UP("Server is up"),
    SERVER_DOWN("Server is  down");
    private final String status;

    Status (String status) {
        this.status = status;
    }

    public String getStatus() {
        return this.status;
    }
}
