---
id: ansible-setup
title: Ansible Setup
sidebar_position: 1
description: Ansible Setup File for Lab 9
---

# OPS445 Ansible setup

```bash
vmlab | SUCCESS => {
   "ansible_facts": {
       "ansible_all_ipv4_addresses": [
           "10.102.115.251"
       ], 
       "ansible_all_ipv6_addresses": [
           "fe80::21d:d8ff:feb7:2269"
       ], 
       "ansible_apparmor": {
           "status": "disabled"
       }, 
       "ansible_architecture": "x86_64", 
       "ansible_bios_date": "11/26/2012", 
       "ansible_bios_version": "Hyper-V UEFI Release v1.0", 
       "ansible_cmdline": {
           "BOOT_IMAGE": "/vmlinuz-3.10.0-1160.49.1.el7.x86_64", 
           "LANG": "en_US.UTF-8", 
           "consoleblank": "0", 
           "crashkernel": "auto", 
           "quiet": true, 
           "rd.lvm.lv": "centos/swap", 
           "rhgb": true, 
           "ro": true, 
           "root": "/dev/mapper/centos-root"
       }, 
       "ansible_date_time": {
           "date": "2022-03-25", 
           "day": "25", 
           "epoch": "1648187056", 
           "hour": "01", 
           "iso8601": "2022-03-25T05:44:16Z", 
           "iso8601_basic": "20220325T014416012882", 
           "iso8601_basic_short": "20220325T014416", 
           "iso8601_micro": "2022-03-25T05:44:16.012882Z", 
           "minute": "44", 
           "month": "03", 
           "second": "16", 
           "time": "01:44:16", 
           "tz": "EDT", 
           "tz_offset": "-0400", 
           "weekday": "Friday", 
           "weekday_number": "5", 
           "weeknumber": "12", 
           "year": "2022"
       }, 
       "ansible_default_ipv4": {
           "address": "10.102.115.251", 
           "alias": "eth0", 
           "broadcast": "10.102.127.255", 
           "gateway": "10.102.112.10", 
           "interface": "eth0", 
           "macaddress": "00:1d:d8:b7:22:69", 
           "mtu": 1500, 
           "netmask": "255.255.240.0", 
           "network": "10.102.112.0", 
           "type": "ether"
       }, 
       "ansible_default_ipv6": {}, 
       "ansible_device_links": {
           "ids": {
               "dm-0": [
                   "dm-name-centos-root", 
                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRW3qJHhsCipyNyDY9OMNZqVHlkgfPUEkEX"
               ], 
               "dm-1": [
                   "dm-name-centos-swap", 
                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWrDqFDwgSZKToJxfW4s5Mv2sKTsVxRyxa"
               ], 
               "dm-2": [
                   "dm-name-centos-home", 
                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWZHMDAXfOIX52SolLNq46A0dOciKzetve"
               ], 
               "sda": [
                   "scsi-360022480a2b83b29924a8f61f33efb6f", 
                   "wwn-0x60022480a2b83b29924a8f61f33efb6f"
               ], 
               "sda1": [
                   "scsi-360022480a2b83b29924a8f61f33efb6f-part1", 
                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part1"
               ], 
               "sda2": [
                   "scsi-360022480a2b83b29924a8f61f33efb6f-part2", 
                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part2"
               ], 
               "sda3": [
                   "lvm-pv-uuid-CLJwdO-6Izo-Af2k-HZfk-LngC-X8mu-INfSVM", 
                   "scsi-360022480a2b83b29924a8f61f33efb6f-part3", 
                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part3"
               ], 
               "sr0": [
                   "scsi-14d534654202020207305e3437703544694957d7ced624a7d"
               ]
           }, 
           "labels": {}, 
           "masters": {
               "sda3": [
                   "dm-0", 
                   "dm-1", 
                   "dm-2"
               ]
           }, 
           "uuids": {
               "dm-0": [
                   "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"
               ], 
               "dm-1": [
                   "0364bfbc-d9a1-4293-98f5-506afd507023"
               ], 
               "dm-2": [
                   "10b84c91-1698-4989-b969-46d44ff156be"
               ], 
               "sda1": [
                   "7425-A7A9"
               ], 
               "sda2": [
                   "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"
               ]
           }
       }, 
       "ansible_devices": {
           "dm-0": {
               "holders": [], 
               "host": "", 
               "links": {
                   "ids": [
                       "dm-name-centos-root", 
                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRW3qJHhsCipyNyDY9OMNZqVHlkgfPUEkEX"
                   ], 
                   "labels": [], 
                   "masters": [], 
                   "uuids": [
                       "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"
                   ]
               }, 
               "model": null, 
               "partitions": {}, 
               "removable": "0", 
               "rotational": "1", 
               "sas_address": null, 
               "sas_device_handle": null, 
               "scheduler_mode": "", 
               "sectors": "77398016", 
               "sectorsize": "512", 
               "size": "36.91 GB", 
               "support_discard": "2097152", 
               "vendor": null, 
               "virtual": 1
           }, 
           "dm-1": {
               "holders": [], 
               "host": "", 
               "links": {
                   "ids": [
                       "dm-name-centos-swap", 
                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWrDqFDwgSZKToJxfW4s5Mv2sKTsVxRyxa"
                   ], 
                   "labels": [], 
                   "masters": [], 
                   "uuids": [
                       "0364bfbc-d9a1-4293-98f5-506afd507023"
                   ]
               }, 
               "model": null, 
               "partitions": {}, 
               "removable": "0", 
               "rotational": "1", 
               "sas_address": null, 
               "sas_device_handle": null, 
               "scheduler_mode": "", 
               "sectors": "8126464", 
               "sectorsize": "512", 
               "size": "3.88 GB", 
               "support_discard": "2097152", 
               "vendor": null, 
               "virtual": 1
           }, 
           "dm-2": {
               "holders": [], 
               "host": "", 
               "links": {
                   "ids": [
                       "dm-name-centos-home", 
                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWZHMDAXfOIX52SolLNq46A0dOciKzetve"
                   ], 
                   "labels": [], 
                   "masters": [], 
                   "uuids": [
                       "10b84c91-1698-4989-b969-46d44ff156be"
                   ]
               }, 
               "model": null, 
               "partitions": {}, 
               "removable": "0", 
               "rotational": "1", 
               "sas_address": null, 
               "sas_device_handle": null, 
               "scheduler_mode": "", 
               "sectors": "37781504", 
               "sectorsize": "512", 
               "size": "18.02 GB", 
               "support_discard": "2097152", 
               "vendor": null, 
               "virtual": 1
           }, 
           "sda": {
               "holders": [], 
               "host": "", 
               "links": {
                   "ids": [
                       "scsi-360022480a2b83b29924a8f61f33efb6f", 
                       "wwn-0x60022480a2b83b29924a8f61f33efb6f"
                   ], 
                   "labels": [], 
                   "masters": [], 
                   "uuids": []
               }, 
               "model": "Virtual Disk", 
               "partitions": {
                   "sda1": {
                       "holders": [], 
                       "links": {
                           "ids": [
                               "scsi-360022480a2b83b29924a8f61f33efb6f-part1", 
                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part1"
                           ], 
                           "labels": [], 
                           "masters": [], 
                           "uuids": [
                               "7425-A7A9"
                           ]
                       }, 
                       "sectors": "409600", 
                       "sectorsize": 512, 
                       "size": "200.00 MB", 
                       "start": "2048", 
                       "uuid": "7425-A7A9"
                   }, 
                   "sda2": {
                       "holders": [], 
                       "links": {
                           "ids": [
                               "scsi-360022480a2b83b29924a8f61f33efb6f-part2", 
                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part2"
                           ], 
                           "labels": [], 
                           "masters": [], 
                           "uuids": [
                               "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"
                           ]
                       }, 
                       "sectors": "2097152", 
                       "sectorsize": 512, 
                       "size": "1.00 GB", 
                       "start": "411648", 
                       "uuid": "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"
                   }, 
                   "sda3": {
                       "holders": [
                           "centos-root", 
                           "centos-swap", 
                           "centos-home"
                       ], 
                       "links": {
                           "ids": [
                               "lvm-pv-uuid-CLJwdO-6Izo-Af2k-HZfk-LngC-X8mu-INfSVM", 
                               "scsi-360022480a2b83b29924a8f61f33efb6f-part3", 
                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part3"
                           ], 
                           "labels": [], 
                           "masters": [
                               "dm-0", 
                               "dm-1", 
                               "dm-2"
                           ], 
                           "uuids": []
                       }, 
                       "sectors": "123318272", 
                       "sectorsize": 512, 
                       "size": "58.80 GB", 
                       "start": "2508800", 
                       "uuid": null
                   }
               }, 
               "removable": "0", 
               "rotational": "1", 
               "sas_address": null, 
               "sas_device_handle": null, 
               "scheduler_mode": "deadline", 
               "sectors": "125829120", 
               "sectorsize": "512", 
               "size": "60.00 GB", 
               "support_discard": "2097152", 
               "vendor": "Msft", 
               "virtual": 1, 
               "wwn": "0x60022480a2b83b29924a8f61f33efb6f"
           }, 
           "sr0": {
               "holders": [], 
               "host": "", 
               "links": {
                   "ids": [
                       "scsi-14d534654202020207305e3437703544694957d7ced624a7d"
                   ], 
                   "labels": [], 
                   "masters": [], 
                   "uuids": []
               }, 
               "model": "Virtual DVD-ROM", 
               "partitions": {}, 
               "removable": "1", 
               "rotational": "1", 
               "sas_address": null, 
               "sas_device_handle": null, 
               "scheduler_mode": "deadline", 
               "sectors": "2097151", 
               "sectorsize": "512", 
               "size": "1024.00 MB", 
               "support_discard": "0", 
               "vendor": "Msft", 
               "virtual": 1
           }
       }, 
       "ansible_distribution": "CentOS", 
       "ansible_distribution_file_parsed": true, 
       "ansible_distribution_file_path": "/etc/redhat-release", 
       "ansible_distribution_file_variety": "RedHat", 
       "ansible_distribution_major_version": "7", 
       "ansible_distribution_release": "Core", 
       "ansible_distribution_version": "7.9", 
       "ansible_dns": {
           "nameservers": [
               "10.101.20.20", 
               "10.102.20.20"
           ]
       }, 
       "ansible_domain": "", 
       "ansible_effective_group_id": 100, 
       "ansible_effective_user_id": 1002, 
       "ansible_env": {
           "HOME": "/home/instructor", 
           "LANG": "C", 
           "LC_ALL": "C", 
           "LC_COLLATE": "C", 
           "LC_NUMERIC": "C", 
           "LESSOPEN": "||/usr/bin/lesspipe.sh %s", 
           "LOGNAME": "instructor", 
           "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:", 
           "MAIL": "/var/mail/instructor", 
           "PATH": "/usr/local/bin:/usr/bin", 
           "PWD": "/home/instructor", 
           "SHELL": "/bin/bash", 
           "SHLVL": "2", 
           "SSH_CLIENT": "10.102.108.12 39688 22", 
           "SSH_CONNECTION": "10.102.108.12 39688 10.102.115.251 22", 
           "SSH_TTY": "/dev/pts/0", 
           "TERM": "xterm", 
           "USER": "instructor", 
           "XDG_RUNTIME_DIR": "/run/user/1002", 
           "XDG_SESSION_ID": "97", 
           "_": "/usr/bin/python"
       }, 
       "ansible_eth0": {
           "active": true, 
           "device": "eth0", 
           "features": {
               "busy_poll": "off [fixed]", 
               "fcoe_mtu": "off [fixed]", 
               "generic_receive_offload": "on", 
               "generic_segmentation_offload": "on", 
               "highdma": "on [fixed]", 
               "hw_tc_offload": "off [fixed]", 
               "l2_fwd_offload": "off [fixed]", 
               "large_receive_offload": "off [fixed]", 
               "loopback": "off [fixed]", 
               "netns_local": "off [fixed]", 
               "ntuple_filters": "off [fixed]", 
               "receive_hashing": "on", 
               "rx_all": "off [fixed]", 
               "rx_checksumming": "on", 
               "rx_fcs": "off [fixed]", 
               "rx_gro_hw": "off [fixed]", 
               "rx_udp_tunnel_port_offload": "off [fixed]", 
               "rx_vlan_filter": "off [fixed]", 
               "rx_vlan_offload": "on [fixed]", 
               "rx_vlan_stag_filter": "off [fixed]", 
               "rx_vlan_stag_hw_parse": "off [fixed]", 
               "scatter_gather": "on", 
               "tcp_segmentation_offload": "on", 
               "tx_checksum_fcoe_crc": "off [fixed]", 
               "tx_checksum_ip_generic": "off [fixed]", 
               "tx_checksum_ipv4": "on", 
               "tx_checksum_ipv6": "on", 
               "tx_checksum_sctp": "off [fixed]", 
               "tx_checksumming": "on", 
               "tx_fcoe_segmentation": "off [fixed]", 
               "tx_gre_csum_segmentation": "off [fixed]", 
               "tx_gre_segmentation": "off [fixed]", 
               "tx_gso_partial": "off [fixed]", 
               "tx_gso_robust": "off [fixed]", 
               "tx_ipip_segmentation": "off [fixed]", 
               "tx_lockless": "off [fixed]", 
               "tx_nocache_copy": "off", 
               "tx_scatter_gather": "on [fixed]", 
               "tx_scatter_gather_fraglist": "off [fixed]", 
               "tx_sctp_segmentation": "off [fixed]", 
               "tx_sit_segmentation": "off [fixed]", 
               "tx_tcp6_segmentation": "on", 
               "tx_tcp_ecn_segmentation": "off [fixed]", 
               "tx_tcp_mangleid_segmentation": "off", 
               "tx_tcp_segmentation": "on", 
               "tx_udp_tnl_csum_segmentation": "off [fixed]", 
               "tx_udp_tnl_segmentation": "off [fixed]", 
               "tx_vlan_offload": "on [fixed]", 
               "tx_vlan_stag_hw_insert": "off [fixed]", 
               "udp_fragmentation_offload": "off [fixed]", 
               "vlan_challenged": "off [fixed]"
           }, 
           "hw_timestamp_filters": [], 
           "ipv4": {
               "address": "10.102.115.251", 
               "broadcast": "10.102.127.255", 
               "netmask": "255.255.240.0", 
               "network": "10.102.112.0"
           }, 
           "ipv6": [
               {
                   "address": "fe80::21d:d8ff:feb7:2269", 
                   "prefix": "64", 
                   "scope": "link"
               }
           ], 
           "macaddress": "00:1d:d8:b7:22:69", 
           "module": "hv_netvsc", 
           "mtu": 1500, 
           "pciid": "eba7816c-5dd8-4370-96f4-39785a9a53d2", 
           "promisc": false, 
           "speed": 10000, 
           "timestamping": [
               "tx_software", 
               "rx_software", 
               "software"
           ], 
           "type": "ether"
       }, 
       "ansible_fibre_channel_wwn": [], 
       "ansible_fips": false, 
       "ansible_form_factor": "Desktop", 
       "ansible_fqdn": "centos7", 
       "ansible_hostname": "centos7", 
       "ansible_hostnqn": "", 
       "ansible_interfaces": [
           "lo", 
           "eth0"
       ], 
       "ansible_is_chroot": true, 
       "ansible_iscsi_iqn": "", 
       "ansible_kernel": "3.10.0-1160.49.1.el7.x86_64", 
       "ansible_kernel_version": "#1 SMP Tue Nov 30 15:51:32 UTC 2021", 
       "ansible_lo": {
           "active": true, 
           "device": "lo", 
           "features": {
               "busy_poll": "off [fixed]", 
               "fcoe_mtu": "off [fixed]", 
               "generic_receive_offload": "on", 
               "generic_segmentation_offload": "on", 
               "highdma": "on [fixed]", 
               "hw_tc_offload": "off [fixed]", 
               "l2_fwd_offload": "off [fixed]", 
               "large_receive_offload": "off [fixed]", 
               "loopback": "on [fixed]", 
               "netns_local": "on [fixed]", 
               "ntuple_filters": "off [fixed]", 
               "receive_hashing": "off [fixed]", 
               "rx_all": "off [fixed]", 
               "rx_checksumming": "on [fixed]", 
               "rx_fcs": "off [fixed]", 
               "rx_gro_hw": "off [fixed]", 
               "rx_udp_tunnel_port_offload": "off [fixed]", 
               "rx_vlan_filter": "off [fixed]", 
               "rx_vlan_offload": "off [fixed]", 
               "rx_vlan_stag_filter": "off [fixed]", 
               "rx_vlan_stag_hw_parse": "off [fixed]", 
               "scatter_gather": "on", 
               "tcp_segmentation_offload": "on", 
               "tx_checksum_fcoe_crc": "off [fixed]", 
               "tx_checksum_ip_generic": "on [fixed]", 
               "tx_checksum_ipv4": "off [fixed]", 
               "tx_checksum_ipv6": "off [fixed]", 
               "tx_checksum_sctp": "on [fixed]", 
               "tx_checksumming": "on", 
               "tx_fcoe_segmentation": "off [fixed]", 
               "tx_gre_csum_segmentation": "off [fixed]", 
               "tx_gre_segmentation": "off [fixed]", 
               "tx_gso_partial": "off [fixed]", 
               "tx_gso_robust": "off [fixed]", 
               "tx_ipip_segmentation": "off [fixed]", 
               "tx_lockless": "on [fixed]", 
               "tx_nocache_copy": "off [fixed]", 
               "tx_scatter_gather": "on [fixed]", 
               "tx_scatter_gather_fraglist": "on [fixed]", 
               "tx_sctp_segmentation": "on", 
               "tx_sit_segmentation": "off [fixed]", 
               "tx_tcp6_segmentation": "on", 
               "tx_tcp_ecn_segmentation": "on", 
               "tx_tcp_mangleid_segmentation": "on", 
               "tx_tcp_segmentation": "on", 
               "tx_udp_tnl_csum_segmentation": "off [fixed]", 
               "tx_udp_tnl_segmentation": "off [fixed]", 
               "tx_vlan_offload": "off [fixed]", 
               "tx_vlan_stag_hw_insert": "off [fixed]", 
               "udp_fragmentation_offload": "on", 
               "vlan_challenged": "on [fixed]"
           }, 
           "hw_timestamp_filters": [], 
           "ipv4": {
               "address": "127.0.0.1", 
               "broadcast": "", 
               "netmask": "255.0.0.0", 
               "network": "127.0.0.0"
           }, 
           "ipv6": [
               {
                   "address": "::1", 
                   "prefix": "128", 
                   "scope": "host"
               }
           ], 
           "mtu": 65536, 
           "promisc": false, 
           "timestamping": [
               "rx_software", 
               "software"
           ], 
           "type": "loopback"
       }, 
       "ansible_local": {}, 
       "ansible_lsb": {}, 
       "ansible_machine": "x86_64", 
       "ansible_machine_id": "c4d7b4a328f3476c9c7b144343986aad", 
       "ansible_memfree_mb": 1013, 
       "ansible_memory_mb": {
           "nocache": {
               "free": 1536, 
               "used": 201
           }, 
           "real": {
               "free": 1013, 
               "total": 1737, 
               "used": 724
           }, 
           "swap": {
               "cached": 0, 
               "free": 3967, 
               "total": 3967, 
               "used": 0
           }
       }, 
       "ansible_memtotal_mb": 1737, 
       "ansible_mounts": [
           {
               "block_available": 176425, 
               "block_size": 4096, 
               "block_total": 259584, 
               "block_used": 83159, 
               "device": "/dev/sda2", 
               "fstype": "xfs", 
               "inode_available": 524242, 
               "inode_total": 524288, 
               "inode_used": 46, 
               "mount": "/boot", 
               "options": "rw,relatime,attr2,inode64,noquota", 
               "size_available": 722636800, 
               "size_total": 1063256064, 
               "uuid": "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"
           }, 
           {
               "block_available": 48275, 
               "block_size": 4096, 
               "block_total": 51145, 
               "block_used": 2870, 
               "device": "/dev/sda1", 
               "fstype": "vfat", 
               "inode_available": 0, 
               "inode_total": 0, 
               "inode_used": 0, 
               "mount": "/boot/efi", 
               "options": "rw,relatime,fmask=0077,dmask=0077,codepage=437,iocharset=ascii,shortname=winnt,errors=remount-ro", 
               "size_available": 197734400, 
               "size_total": 209489920, 
               "uuid": "7425-A7A9"
           }, 
           {
               "block_available": 9164478, 
               "block_size": 4096, 
               "block_total": 9670028, 
               "block_used": 505550, 
               "device": "/dev/mapper/centos-root", 
               "fstype": "xfs", 
               "inode_available": 19304008, 
               "inode_total": 19349504, 
               "inode_used": 45496, 
               "mount": "/", 
               "options": "rw,relatime,attr2,inode64,noquota", 
               "size_available": 37537701888, 
               "size_total": 39608434688, 
               "uuid": "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"
           }, 
           {
               "block_available": 4711779, 
               "block_size": 4096, 
               "block_total": 4720128, 
               "block_used": 8349, 
               "device": "/dev/mapper/centos-home", 
               "fstype": "xfs", 
               "inode_available": 9445355, 
               "inode_total": 9445376, 
               "inode_used": 21, 
               "mount": "/home", 
               "options": "rw,relatime,attr2,inode64,noquota", 
               "size_available": 19299446784, 
               "size_total": 19333644288, 
               "uuid": "10b84c91-1698-4989-b969-46d44ff156be"
           }
       ], 
       "ansible_nodename": "centos7", 
       "ansible_os_family": "RedHat", 
       "ansible_pkg_mgr": "yum", 
       "ansible_proc_cmdline": {
           "BOOT_IMAGE": "/vmlinuz-3.10.0-1160.49.1.el7.x86_64", 
           "LANG": "en_US.UTF-8", 
           "consoleblank": "0", 
           "crashkernel": "auto", 
           "quiet": true, 
           "rd.lvm.lv": [
               "centos/root", 
               "centos/swap"
           ], 
           "rhgb": true, 
           "ro": true, 
           "root": "/dev/mapper/centos-root"
       }, 
       "ansible_processor": [
           "0", 
           "GenuineIntel", 
           "Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz", 
           "1", 
           "GenuineIntel", 
           "Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz"
       ], 
       "ansible_processor_cores": 2, 
       "ansible_processor_count": 1, 
       "ansible_processor_threads_per_core": 1, 
       "ansible_processor_vcpus": 2, 
       "ansible_product_name": "Virtual Machine", 
       "ansible_product_serial": "NA", 
       "ansible_product_uuid": "NA", 
       "ansible_product_version": "Hyper-V UEFI Release v1.0", 
       "ansible_python": {
           "executable": "/usr/bin/python", 
           "has_sslcontext": true, 
           "type": "CPython", 
           "version": {
               "major": 2, 
               "micro": 5, 
               "minor": 7, 
               "releaselevel": "final", 
               "serial": 0
           }, 
           "version_info": [
               2, 
               7, 
               5, 
               "final", 
               0
           ]
       }, 
       "ansible_python_version": "2.7.5", 
       "ansible_real_group_id": 100, 
       "ansible_real_user_id": 1002, 
       "ansible_selinux": {
           "status": "disabled"
       }, 
       "ansible_selinux_python_present": true, 
       "ansible_service_mgr": "systemd", 
       "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBLZK5luCblMab4/oGuCl6+Mj58AZ7QdY2tqejJNGxtN4FEghjVw3xkM9mR1Thk9EigI2X31DREzr2n89EqbygSI=", 
       "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIMOSaVyOKshD4ly51Avr63GgK++yK3pUGjPiI2fBVvTk", 
       "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQCwc7z8EXYKn8IdDdj+hpbEbyMIoXTBb2TJeV+KE9J3NXP+86H/rt26v+Vx4b0l5UZPBVIixP29wWIDVt3TBFEyxi+zS0oplDPaw8ZL1/V7/yDNV1IxPtlWgC1AcW9CYuk6WJRAYP5LwcZFn9BJ+zC0iaBibq6g7KIkr0hv36giU6hbin6bup7rqaeWp19YP3ji7I4JwIbJjf84lwk8WNlmuhZEGUNe8vgsrcr39oVSo7apDdu6C/baSwa20OdvzIxTgv9v9Pp4okumWxawB6jooorbR7jN5EUB7Z9x/3lTWjrAw4mlagZYuAVysHGuY7nEfywTvwYwAs4y16VHf9Pp", 
       "ansible_swapfree_mb": 3967, 
       "ansible_swaptotal_mb": 3967, 
       "ansible_system": "Linux", 
       "ansible_system_capabilities": [
           ""
       ], 
       "ansible_system_capabilities_enforced": "True", 
       "ansible_system_vendor": "Microsoft Corporation", 
       "ansible_uptime_seconds": 311271, 
       "ansible_user_dir": "/home/instructor", 
       "ansible_user_gecos": "", 
       "ansible_user_gid": 100, 
       "ansible_user_id": "instructor", 
       "ansible_user_shell": "/bin/bash", 
       "ansible_user_uid": 1002, 
       "ansible_userspace_architecture": "x86_64", 
       "ansible_userspace_bits": "64", 
       "ansible_virtualization_role": "guest", 
       "ansible_virtualization_type": "VirtualPC", 
       "discovered_interpreter_python": "/usr/bin/python", 
       "gather_subset": [
           "all"
       ], 
       "module_setup": true
   }, 
   "changed": false
}
```
