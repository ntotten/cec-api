# Simple CEC REST API
This is a dead simple API that enables sending basic commands to [libcec](https://github.com/Pulse-Eight/libcec) through the cec-client.

## Install

```
npm install ntotten/cec-api
```

## Usage
Once the app is running simply call the REST API

```
POST: /device/0/command/on
POST: /device/0/command/standby
```


## Permissions

The user who runs this app needs permissions to the serial port

```
sudo usermod -a -G dialout nodeapps
```


## Systemd

Create the systemd file at `/etc/systemd/system/cec-api.service`

```
[Service]
ExecStart=/usr/local/bin/node /opts/cec-api/bin/www
Restart=always
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=cec-api
User=nodeapps
Group=nodeapps
Environment="NODE_ENV=production" "PORT=8081"

[Install]
WantedBy=multi-user.target
```

Enable and start

```
systemctl enable cec-api.service
systemctl start cec-api.service
```
