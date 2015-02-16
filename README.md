# Simple CEC API


## Permissions

The user who runs this app needs permissions to the serial port

  sudo usermod -a -G dialout nodeapps


## Systemd

Create the systemd file at `/etc/systemd/system/cec-api.service`

  [Service]
  ExecStart=/usr/local/bin/node /path/to/cec-api/bin/www
  Restart=always
  StandardOutput=syslog
  StandardError=syslog
  SyslogIdentifier=cec-api
  User=nodeapps
  Group=nodeapps
  Environment="NODE_ENV=production" "PORT=8081"

  [Install]
  WantedBy=multi-user.target


Enable and start

  systemctl enable cec-api.service
  systemctl start cec-api.service
