"use strict";(self.webpackChunkOPS445=self.webpackChunkOPS445||[]).push([[426],{3905:function(n,e,s){s.d(e,{Zo:function(){return d},kt:function(){return b}});var t=s(7294);function a(n,e,s){return e in n?Object.defineProperty(n,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[e]=s,n}function i(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.push.apply(s,t)}return s}function o(n){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){a(n,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(s,e))}))}return n}function r(n,e){if(null==n)return{};var s,t,a=function(n,e){if(null==n)return{};var s,t,a={},i=Object.keys(n);for(t=0;t<i.length;t++)s=i[t],e.indexOf(s)>=0||(a[s]=n[s]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)s=i[t],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(n,s)&&(a[s]=n[s])}return a}var l=t.createContext({}),f=function(n){var e=t.useContext(l),s=e;return n&&(s="function"==typeof n?n(e):o(o({},e),n)),s},d=function(n){var e=f(n.components);return t.createElement(l.Provider,{value:e},n.children)},_={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var s=n.components,a=n.mdxType,i=n.originalType,l=n.parentName,d=r(n,["components","mdxType","originalType","parentName"]),c=f(s),b=a,u=c["".concat(l,".").concat(b)]||c[b]||_[b]||i;return s?t.createElement(u,o(o({ref:e},d),{},{components:s})):t.createElement(u,o({ref:e},d))}));function b(n,e){var s=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=s.length,o=new Array(i);o[0]=c;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:a,o[1]=r;for(var f=2;f<i;f++)o[f]=s[f];return t.createElement.apply(null,o)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"},5237:function(n,e,s){s.r(e),s.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return _},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return f}});var t=s(3117),a=(s(7294),s(3905));const i={id:"ansible-setup",title:"Ansible Setup",sidebar_position:1,description:"Ansible Setup File for Lab 9"},o="Ansible setup",r={unversionedId:"C-ExtraResources/ansible-setup",id:"C-ExtraResources/ansible-setup",title:"Ansible Setup",description:"Ansible Setup File for Lab 9",source:"@site/docs/C-ExtraResources/ansible-setup.md",sourceDirName:"C-ExtraResources",slug:"/C-ExtraResources/ansible-setup",permalink:"/OPS445/C-ExtraResources/ansible-setup",draft:!1,editUrl:"https://github.com/Seneca-ICTOER/OPS445/tree/main/docs/C-ExtraResources/ansible-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ansible-setup",title:"Ansible Setup",sidebar_position:1,description:"Ansible Setup File for Lab 9"},sidebar:"courseNotesSidebar",previous:{title:"Assignment 2 Version B",permalink:"/OPS445/B-Assignments/assignment2b"},next:{title:"Sample Ansible Hosts",permalink:"/OPS445/C-ExtraResources/sample-ansible-hosts"}},l={},f=[],d={toc:f};function _(n){let{components:e,...s}=n;return(0,a.kt)("wrapper",(0,t.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ansible-setup"},"Ansible setup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'vmlab | SUCCESS => {\n   "ansible_facts": {\n       "ansible_all_ipv4_addresses": [\n           "10.102.115.251"\n       ], \n       "ansible_all_ipv6_addresses": [\n           "fe80::21d:d8ff:feb7:2269"\n       ], \n       "ansible_apparmor": {\n           "status": "disabled"\n       }, \n       "ansible_architecture": "x86_64", \n       "ansible_bios_date": "11/26/2012", \n       "ansible_bios_version": "Hyper-V UEFI Release v1.0", \n       "ansible_cmdline": {\n           "BOOT_IMAGE": "/vmlinuz-3.10.0-1160.49.1.el7.x86_64", \n           "LANG": "en_US.UTF-8", \n           "consoleblank": "0", \n           "crashkernel": "auto", \n           "quiet": true, \n           "rd.lvm.lv": "centos/swap", \n           "rhgb": true, \n           "ro": true, \n           "root": "/dev/mapper/centos-root"\n       }, \n       "ansible_date_time": {\n           "date": "2022-03-25", \n           "day": "25", \n           "epoch": "1648187056", \n           "hour": "01", \n           "iso8601": "2022-03-25T05:44:16Z", \n           "iso8601_basic": "20220325T014416012882", \n           "iso8601_basic_short": "20220325T014416", \n           "iso8601_micro": "2022-03-25T05:44:16.012882Z", \n           "minute": "44", \n           "month": "03", \n           "second": "16", \n           "time": "01:44:16", \n           "tz": "EDT", \n           "tz_offset": "-0400", \n           "weekday": "Friday", \n           "weekday_number": "5", \n           "weeknumber": "12", \n           "year": "2022"\n       }, \n       "ansible_default_ipv4": {\n           "address": "10.102.115.251", \n           "alias": "eth0", \n           "broadcast": "10.102.127.255", \n           "gateway": "10.102.112.10", \n           "interface": "eth0", \n           "macaddress": "00:1d:d8:b7:22:69", \n           "mtu": 1500, \n           "netmask": "255.255.240.0", \n           "network": "10.102.112.0", \n           "type": "ether"\n       }, \n       "ansible_default_ipv6": {}, \n       "ansible_device_links": {\n           "ids": {\n               "dm-0": [\n                   "dm-name-centos-root", \n                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRW3qJHhsCipyNyDY9OMNZqVHlkgfPUEkEX"\n               ], \n               "dm-1": [\n                   "dm-name-centos-swap", \n                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWrDqFDwgSZKToJxfW4s5Mv2sKTsVxRyxa"\n               ], \n               "dm-2": [\n                   "dm-name-centos-home", \n                   "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWZHMDAXfOIX52SolLNq46A0dOciKzetve"\n               ], \n               "sda": [\n                   "scsi-360022480a2b83b29924a8f61f33efb6f", \n                   "wwn-0x60022480a2b83b29924a8f61f33efb6f"\n               ], \n               "sda1": [\n                   "scsi-360022480a2b83b29924a8f61f33efb6f-part1", \n                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part1"\n               ], \n               "sda2": [\n                   "scsi-360022480a2b83b29924a8f61f33efb6f-part2", \n                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part2"\n               ], \n               "sda3": [\n                   "lvm-pv-uuid-CLJwdO-6Izo-Af2k-HZfk-LngC-X8mu-INfSVM", \n                   "scsi-360022480a2b83b29924a8f61f33efb6f-part3", \n                   "wwn-0x60022480a2b83b29924a8f61f33efb6f-part3"\n               ], \n               "sr0": [\n                   "scsi-14d534654202020207305e3437703544694957d7ced624a7d"\n               ]\n           }, \n           "labels": {}, \n           "masters": {\n               "sda3": [\n                   "dm-0", \n                   "dm-1", \n                   "dm-2"\n               ]\n           }, \n           "uuids": {\n               "dm-0": [\n                   "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"\n               ], \n               "dm-1": [\n                   "0364bfbc-d9a1-4293-98f5-506afd507023"\n               ], \n               "dm-2": [\n                   "10b84c91-1698-4989-b969-46d44ff156be"\n               ], \n               "sda1": [\n                   "7425-A7A9"\n               ], \n               "sda2": [\n                   "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"\n               ]\n           }\n       }, \n       "ansible_devices": {\n           "dm-0": {\n               "holders": [], \n               "host": "", \n               "links": {\n                   "ids": [\n                       "dm-name-centos-root", \n                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRW3qJHhsCipyNyDY9OMNZqVHlkgfPUEkEX"\n                   ], \n                   "labels": [], \n                   "masters": [], \n                   "uuids": [\n                       "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"\n                   ]\n               }, \n               "model": null, \n               "partitions": {}, \n               "removable": "0", \n               "rotational": "1", \n               "sas_address": null, \n               "sas_device_handle": null, \n               "scheduler_mode": "", \n               "sectors": "77398016", \n               "sectorsize": "512", \n               "size": "36.91 GB", \n               "support_discard": "2097152", \n               "vendor": null, \n               "virtual": 1\n           }, \n           "dm-1": {\n               "holders": [], \n               "host": "", \n               "links": {\n                   "ids": [\n                       "dm-name-centos-swap", \n                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWrDqFDwgSZKToJxfW4s5Mv2sKTsVxRyxa"\n                   ], \n                   "labels": [], \n                   "masters": [], \n                   "uuids": [\n                       "0364bfbc-d9a1-4293-98f5-506afd507023"\n                   ]\n               }, \n               "model": null, \n               "partitions": {}, \n               "removable": "0", \n               "rotational": "1", \n               "sas_address": null, \n               "sas_device_handle": null, \n               "scheduler_mode": "", \n               "sectors": "8126464", \n               "sectorsize": "512", \n               "size": "3.88 GB", \n               "support_discard": "2097152", \n               "vendor": null, \n               "virtual": 1\n           }, \n           "dm-2": {\n               "holders": [], \n               "host": "", \n               "links": {\n                   "ids": [\n                       "dm-name-centos-home", \n                       "dm-uuid-LVM-9HvhiOJWaEEjeGfiQxW7SmMHzSbS1kRWZHMDAXfOIX52SolLNq46A0dOciKzetve"\n                   ], \n                   "labels": [], \n                   "masters": [], \n                   "uuids": [\n                       "10b84c91-1698-4989-b969-46d44ff156be"\n                   ]\n               }, \n               "model": null, \n               "partitions": {}, \n               "removable": "0", \n               "rotational": "1", \n               "sas_address": null, \n               "sas_device_handle": null, \n               "scheduler_mode": "", \n               "sectors": "37781504", \n               "sectorsize": "512", \n               "size": "18.02 GB", \n               "support_discard": "2097152", \n               "vendor": null, \n               "virtual": 1\n           }, \n           "sda": {\n               "holders": [], \n               "host": "", \n               "links": {\n                   "ids": [\n                       "scsi-360022480a2b83b29924a8f61f33efb6f", \n                       "wwn-0x60022480a2b83b29924a8f61f33efb6f"\n                   ], \n                   "labels": [], \n                   "masters": [], \n                   "uuids": []\n               }, \n               "model": "Virtual Disk", \n               "partitions": {\n                   "sda1": {\n                       "holders": [], \n                       "links": {\n                           "ids": [\n                               "scsi-360022480a2b83b29924a8f61f33efb6f-part1", \n                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part1"\n                           ], \n                           "labels": [], \n                           "masters": [], \n                           "uuids": [\n                               "7425-A7A9"\n                           ]\n                       }, \n                       "sectors": "409600", \n                       "sectorsize": 512, \n                       "size": "200.00 MB", \n                       "start": "2048", \n                       "uuid": "7425-A7A9"\n                   }, \n                   "sda2": {\n                       "holders": [], \n                       "links": {\n                           "ids": [\n                               "scsi-360022480a2b83b29924a8f61f33efb6f-part2", \n                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part2"\n                           ], \n                           "labels": [], \n                           "masters": [], \n                           "uuids": [\n                               "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"\n                           ]\n                       }, \n                       "sectors": "2097152", \n                       "sectorsize": 512, \n                       "size": "1.00 GB", \n                       "start": "411648", \n                       "uuid": "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"\n                   }, \n                   "sda3": {\n                       "holders": [\n                           "centos-root", \n                           "centos-swap", \n                           "centos-home"\n                       ], \n                       "links": {\n                           "ids": [\n                               "lvm-pv-uuid-CLJwdO-6Izo-Af2k-HZfk-LngC-X8mu-INfSVM", \n                               "scsi-360022480a2b83b29924a8f61f33efb6f-part3", \n                               "wwn-0x60022480a2b83b29924a8f61f33efb6f-part3"\n                           ], \n                           "labels": [], \n                           "masters": [\n                               "dm-0", \n                               "dm-1", \n                               "dm-2"\n                           ], \n                           "uuids": []\n                       }, \n                       "sectors": "123318272", \n                       "sectorsize": 512, \n                       "size": "58.80 GB", \n                       "start": "2508800", \n                       "uuid": null\n                   }\n               }, \n               "removable": "0", \n               "rotational": "1", \n               "sas_address": null, \n               "sas_device_handle": null, \n               "scheduler_mode": "deadline", \n               "sectors": "125829120", \n               "sectorsize": "512", \n               "size": "60.00 GB", \n               "support_discard": "2097152", \n               "vendor": "Msft", \n               "virtual": 1, \n               "wwn": "0x60022480a2b83b29924a8f61f33efb6f"\n           }, \n           "sr0": {\n               "holders": [], \n               "host": "", \n               "links": {\n                   "ids": [\n                       "scsi-14d534654202020207305e3437703544694957d7ced624a7d"\n                   ], \n                   "labels": [], \n                   "masters": [], \n                   "uuids": []\n               }, \n               "model": "Virtual DVD-ROM", \n               "partitions": {}, \n               "removable": "1", \n               "rotational": "1", \n               "sas_address": null, \n               "sas_device_handle": null, \n               "scheduler_mode": "deadline", \n               "sectors": "2097151", \n               "sectorsize": "512", \n               "size": "1024.00 MB", \n               "support_discard": "0", \n               "vendor": "Msft", \n               "virtual": 1\n           }\n       }, \n       "ansible_distribution": "CentOS", \n       "ansible_distribution_file_parsed": true, \n       "ansible_distribution_file_path": "/etc/redhat-release", \n       "ansible_distribution_file_variety": "RedHat", \n       "ansible_distribution_major_version": "7", \n       "ansible_distribution_release": "Core", \n       "ansible_distribution_version": "7.9", \n       "ansible_dns": {\n           "nameservers": [\n               "10.101.20.20", \n               "10.102.20.20"\n           ]\n       }, \n       "ansible_domain": "", \n       "ansible_effective_group_id": 100, \n       "ansible_effective_user_id": 1002, \n       "ansible_env": {\n           "HOME": "/home/instructor", \n           "LANG": "C", \n           "LC_ALL": "C", \n           "LC_COLLATE": "C", \n           "LC_NUMERIC": "C", \n           "LESSOPEN": "||/usr/bin/lesspipe.sh %s", \n           "LOGNAME": "instructor", \n           "LS_COLORS": "rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=01;05;37;41:su=37;41:sg=30;43:ca=30;41:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.axv=01;35:*.anx=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=01;36:*.au=01;36:*.flac=01;36:*.mid=01;36:*.midi=01;36:*.mka=01;36:*.mp3=01;36:*.mpc=01;36:*.ogg=01;36:*.ra=01;36:*.wav=01;36:*.axa=01;36:*.oga=01;36:*.spx=01;36:*.xspf=01;36:", \n           "MAIL": "/var/mail/instructor", \n           "PATH": "/usr/local/bin:/usr/bin", \n           "PWD": "/home/instructor", \n           "SHELL": "/bin/bash", \n           "SHLVL": "2", \n           "SSH_CLIENT": "10.102.108.12 39688 22", \n           "SSH_CONNECTION": "10.102.108.12 39688 10.102.115.251 22", \n           "SSH_TTY": "/dev/pts/0", \n           "TERM": "xterm", \n           "USER": "instructor", \n           "XDG_RUNTIME_DIR": "/run/user/1002", \n           "XDG_SESSION_ID": "97", \n           "_": "/usr/bin/python"\n       }, \n       "ansible_eth0": {\n           "active": true, \n           "device": "eth0", \n           "features": {\n               "busy_poll": "off [fixed]", \n               "fcoe_mtu": "off [fixed]", \n               "generic_receive_offload": "on", \n               "generic_segmentation_offload": "on", \n               "highdma": "on [fixed]", \n               "hw_tc_offload": "off [fixed]", \n               "l2_fwd_offload": "off [fixed]", \n               "large_receive_offload": "off [fixed]", \n               "loopback": "off [fixed]", \n               "netns_local": "off [fixed]", \n               "ntuple_filters": "off [fixed]", \n               "receive_hashing": "on", \n               "rx_all": "off [fixed]", \n               "rx_checksumming": "on", \n               "rx_fcs": "off [fixed]", \n               "rx_gro_hw": "off [fixed]", \n               "rx_udp_tunnel_port_offload": "off [fixed]", \n               "rx_vlan_filter": "off [fixed]", \n               "rx_vlan_offload": "on [fixed]", \n               "rx_vlan_stag_filter": "off [fixed]", \n               "rx_vlan_stag_hw_parse": "off [fixed]", \n               "scatter_gather": "on", \n               "tcp_segmentation_offload": "on", \n               "tx_checksum_fcoe_crc": "off [fixed]", \n               "tx_checksum_ip_generic": "off [fixed]", \n               "tx_checksum_ipv4": "on", \n               "tx_checksum_ipv6": "on", \n               "tx_checksum_sctp": "off [fixed]", \n               "tx_checksumming": "on", \n               "tx_fcoe_segmentation": "off [fixed]", \n               "tx_gre_csum_segmentation": "off [fixed]", \n               "tx_gre_segmentation": "off [fixed]", \n               "tx_gso_partial": "off [fixed]", \n               "tx_gso_robust": "off [fixed]", \n               "tx_ipip_segmentation": "off [fixed]", \n               "tx_lockless": "off [fixed]", \n               "tx_nocache_copy": "off", \n               "tx_scatter_gather": "on [fixed]", \n               "tx_scatter_gather_fraglist": "off [fixed]", \n               "tx_sctp_segmentation": "off [fixed]", \n               "tx_sit_segmentation": "off [fixed]", \n               "tx_tcp6_segmentation": "on", \n               "tx_tcp_ecn_segmentation": "off [fixed]", \n               "tx_tcp_mangleid_segmentation": "off", \n               "tx_tcp_segmentation": "on", \n               "tx_udp_tnl_csum_segmentation": "off [fixed]", \n               "tx_udp_tnl_segmentation": "off [fixed]", \n               "tx_vlan_offload": "on [fixed]", \n               "tx_vlan_stag_hw_insert": "off [fixed]", \n               "udp_fragmentation_offload": "off [fixed]", \n               "vlan_challenged": "off [fixed]"\n           }, \n           "hw_timestamp_filters": [], \n           "ipv4": {\n               "address": "10.102.115.251", \n               "broadcast": "10.102.127.255", \n               "netmask": "255.255.240.0", \n               "network": "10.102.112.0"\n           }, \n           "ipv6": [\n               {\n                   "address": "fe80::21d:d8ff:feb7:2269", \n                   "prefix": "64", \n                   "scope": "link"\n               }\n           ], \n           "macaddress": "00:1d:d8:b7:22:69", \n           "module": "hv_netvsc", \n           "mtu": 1500, \n           "pciid": "eba7816c-5dd8-4370-96f4-39785a9a53d2", \n           "promisc": false, \n           "speed": 10000, \n           "timestamping": [\n               "tx_software", \n               "rx_software", \n               "software"\n           ], \n           "type": "ether"\n       }, \n       "ansible_fibre_channel_wwn": [], \n       "ansible_fips": false, \n       "ansible_form_factor": "Desktop", \n       "ansible_fqdn": "centos7", \n       "ansible_hostname": "centos7", \n       "ansible_hostnqn": "", \n       "ansible_interfaces": [\n           "lo", \n           "eth0"\n       ], \n       "ansible_is_chroot": true, \n       "ansible_iscsi_iqn": "", \n       "ansible_kernel": "3.10.0-1160.49.1.el7.x86_64", \n       "ansible_kernel_version": "#1 SMP Tue Nov 30 15:51:32 UTC 2021", \n       "ansible_lo": {\n           "active": true, \n           "device": "lo", \n           "features": {\n               "busy_poll": "off [fixed]", \n               "fcoe_mtu": "off [fixed]", \n               "generic_receive_offload": "on", \n               "generic_segmentation_offload": "on", \n               "highdma": "on [fixed]", \n               "hw_tc_offload": "off [fixed]", \n               "l2_fwd_offload": "off [fixed]", \n               "large_receive_offload": "off [fixed]", \n               "loopback": "on [fixed]", \n               "netns_local": "on [fixed]", \n               "ntuple_filters": "off [fixed]", \n               "receive_hashing": "off [fixed]", \n               "rx_all": "off [fixed]", \n               "rx_checksumming": "on [fixed]", \n               "rx_fcs": "off [fixed]", \n               "rx_gro_hw": "off [fixed]", \n               "rx_udp_tunnel_port_offload": "off [fixed]", \n               "rx_vlan_filter": "off [fixed]", \n               "rx_vlan_offload": "off [fixed]", \n               "rx_vlan_stag_filter": "off [fixed]", \n               "rx_vlan_stag_hw_parse": "off [fixed]", \n               "scatter_gather": "on", \n               "tcp_segmentation_offload": "on", \n               "tx_checksum_fcoe_crc": "off [fixed]", \n               "tx_checksum_ip_generic": "on [fixed]", \n               "tx_checksum_ipv4": "off [fixed]", \n               "tx_checksum_ipv6": "off [fixed]", \n               "tx_checksum_sctp": "on [fixed]", \n               "tx_checksumming": "on", \n               "tx_fcoe_segmentation": "off [fixed]", \n               "tx_gre_csum_segmentation": "off [fixed]", \n               "tx_gre_segmentation": "off [fixed]", \n               "tx_gso_partial": "off [fixed]", \n               "tx_gso_robust": "off [fixed]", \n               "tx_ipip_segmentation": "off [fixed]", \n               "tx_lockless": "on [fixed]", \n               "tx_nocache_copy": "off [fixed]", \n               "tx_scatter_gather": "on [fixed]", \n               "tx_scatter_gather_fraglist": "on [fixed]", \n               "tx_sctp_segmentation": "on", \n               "tx_sit_segmentation": "off [fixed]", \n               "tx_tcp6_segmentation": "on", \n               "tx_tcp_ecn_segmentation": "on", \n               "tx_tcp_mangleid_segmentation": "on", \n               "tx_tcp_segmentation": "on", \n               "tx_udp_tnl_csum_segmentation": "off [fixed]", \n               "tx_udp_tnl_segmentation": "off [fixed]", \n               "tx_vlan_offload": "off [fixed]", \n               "tx_vlan_stag_hw_insert": "off [fixed]", \n               "udp_fragmentation_offload": "on", \n               "vlan_challenged": "on [fixed]"\n           }, \n           "hw_timestamp_filters": [], \n           "ipv4": {\n               "address": "127.0.0.1", \n               "broadcast": "", \n               "netmask": "255.0.0.0", \n               "network": "127.0.0.0"\n           }, \n           "ipv6": [\n               {\n                   "address": "::1", \n                   "prefix": "128", \n                   "scope": "host"\n               }\n           ], \n           "mtu": 65536, \n           "promisc": false, \n           "timestamping": [\n               "rx_software", \n               "software"\n           ], \n           "type": "loopback"\n       }, \n       "ansible_local": {}, \n       "ansible_lsb": {}, \n       "ansible_machine": "x86_64", \n       "ansible_machine_id": "c4d7b4a328f3476c9c7b144343986aad", \n       "ansible_memfree_mb": 1013, \n       "ansible_memory_mb": {\n           "nocache": {\n               "free": 1536, \n               "used": 201\n           }, \n           "real": {\n               "free": 1013, \n               "total": 1737, \n               "used": 724\n           }, \n           "swap": {\n               "cached": 0, \n               "free": 3967, \n               "total": 3967, \n               "used": 0\n           }\n       }, \n       "ansible_memtotal_mb": 1737, \n       "ansible_mounts": [\n           {\n               "block_available": 176425, \n               "block_size": 4096, \n               "block_total": 259584, \n               "block_used": 83159, \n               "device": "/dev/sda2", \n               "fstype": "xfs", \n               "inode_available": 524242, \n               "inode_total": 524288, \n               "inode_used": 46, \n               "mount": "/boot", \n               "options": "rw,relatime,attr2,inode64,noquota", \n               "size_available": 722636800, \n               "size_total": 1063256064, \n               "uuid": "b2f59fbd-a0aa-4e7a-b2d3-48de94408ad2"\n           }, \n           {\n               "block_available": 48275, \n               "block_size": 4096, \n               "block_total": 51145, \n               "block_used": 2870, \n               "device": "/dev/sda1", \n               "fstype": "vfat", \n               "inode_available": 0, \n               "inode_total": 0, \n               "inode_used": 0, \n               "mount": "/boot/efi", \n               "options": "rw,relatime,fmask=0077,dmask=0077,codepage=437,iocharset=ascii,shortname=winnt,errors=remount-ro", \n               "size_available": 197734400, \n               "size_total": 209489920, \n               "uuid": "7425-A7A9"\n           }, \n           {\n               "block_available": 9164478, \n               "block_size": 4096, \n               "block_total": 9670028, \n               "block_used": 505550, \n               "device": "/dev/mapper/centos-root", \n               "fstype": "xfs", \n               "inode_available": 19304008, \n               "inode_total": 19349504, \n               "inode_used": 45496, \n               "mount": "/", \n               "options": "rw,relatime,attr2,inode64,noquota", \n               "size_available": 37537701888, \n               "size_total": 39608434688, \n               "uuid": "5cc0b400-e176-457a-bf51-cb85a1ef1ec0"\n           }, \n           {\n               "block_available": 4711779, \n               "block_size": 4096, \n               "block_total": 4720128, \n               "block_used": 8349, \n               "device": "/dev/mapper/centos-home", \n               "fstype": "xfs", \n               "inode_available": 9445355, \n               "inode_total": 9445376, \n               "inode_used": 21, \n               "mount": "/home", \n               "options": "rw,relatime,attr2,inode64,noquota", \n               "size_available": 19299446784, \n               "size_total": 19333644288, \n               "uuid": "10b84c91-1698-4989-b969-46d44ff156be"\n           }\n       ], \n       "ansible_nodename": "centos7", \n       "ansible_os_family": "RedHat", \n       "ansible_pkg_mgr": "yum", \n       "ansible_proc_cmdline": {\n           "BOOT_IMAGE": "/vmlinuz-3.10.0-1160.49.1.el7.x86_64", \n           "LANG": "en_US.UTF-8", \n           "consoleblank": "0", \n           "crashkernel": "auto", \n           "quiet": true, \n           "rd.lvm.lv": [\n               "centos/root", \n               "centos/swap"\n           ], \n           "rhgb": true, \n           "ro": true, \n           "root": "/dev/mapper/centos-root"\n       }, \n       "ansible_processor": [\n           "0", \n           "GenuineIntel", \n           "Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz", \n           "1", \n           "GenuineIntel", \n           "Intel(R) Xeon(R) CPU E5-2680 0 @ 2.70GHz"\n       ], \n       "ansible_processor_cores": 2, \n       "ansible_processor_count": 1, \n       "ansible_processor_threads_per_core": 1, \n       "ansible_processor_vcpus": 2, \n       "ansible_product_name": "Virtual Machine", \n       "ansible_product_serial": "NA", \n       "ansible_product_uuid": "NA", \n       "ansible_product_version": "Hyper-V UEFI Release v1.0", \n       "ansible_python": {\n           "executable": "/usr/bin/python", \n           "has_sslcontext": true, \n           "type": "CPython", \n           "version": {\n               "major": 2, \n               "micro": 5, \n               "minor": 7, \n               "releaselevel": "final", \n               "serial": 0\n           }, \n           "version_info": [\n               2, \n               7, \n               5, \n               "final", \n               0\n           ]\n       }, \n       "ansible_python_version": "2.7.5", \n       "ansible_real_group_id": 100, \n       "ansible_real_user_id": 1002, \n       "ansible_selinux": {\n           "status": "disabled"\n       }, \n       "ansible_selinux_python_present": true, \n       "ansible_service_mgr": "systemd", \n       "ansible_ssh_host_key_ecdsa_public": "AAAAE2VjZHNhLXNoYTItbmlzdHAyNTYAAAAIbmlzdHAyNTYAAABBBLZK5luCblMab4/oGuCl6+Mj58AZ7QdY2tqejJNGxtN4FEghjVw3xkM9mR1Thk9EigI2X31DREzr2n89EqbygSI=", \n       "ansible_ssh_host_key_ed25519_public": "AAAAC3NzaC1lZDI1NTE5AAAAIMOSaVyOKshD4ly51Avr63GgK++yK3pUGjPiI2fBVvTk", \n       "ansible_ssh_host_key_rsa_public": "AAAAB3NzaC1yc2EAAAADAQABAAABAQCwc7z8EXYKn8IdDdj+hpbEbyMIoXTBb2TJeV+KE9J3NXP+86H/rt26v+Vx4b0l5UZPBVIixP29wWIDVt3TBFEyxi+zS0oplDPaw8ZL1/V7/yDNV1IxPtlWgC1AcW9CYuk6WJRAYP5LwcZFn9BJ+zC0iaBibq6g7KIkr0hv36giU6hbin6bup7rqaeWp19YP3ji7I4JwIbJjf84lwk8WNlmuhZEGUNe8vgsrcr39oVSo7apDdu6C/baSwa20OdvzIxTgv9v9Pp4okumWxawB6jooorbR7jN5EUB7Z9x/3lTWjrAw4mlagZYuAVysHGuY7nEfywTvwYwAs4y16VHf9Pp", \n       "ansible_swapfree_mb": 3967, \n       "ansible_swaptotal_mb": 3967, \n       "ansible_system": "Linux", \n       "ansible_system_capabilities": [\n           ""\n       ], \n       "ansible_system_capabilities_enforced": "True", \n       "ansible_system_vendor": "Microsoft Corporation", \n       "ansible_uptime_seconds": 311271, \n       "ansible_user_dir": "/home/instructor", \n       "ansible_user_gecos": "", \n       "ansible_user_gid": 100, \n       "ansible_user_id": "instructor", \n       "ansible_user_shell": "/bin/bash", \n       "ansible_user_uid": 1002, \n       "ansible_userspace_architecture": "x86_64", \n       "ansible_userspace_bits": "64", \n       "ansible_virtualization_role": "guest", \n       "ansible_virtualization_type": "VirtualPC", \n       "discovered_interpreter_python": "/usr/bin/python", \n       "gather_subset": [\n           "all"\n       ], \n       "module_setup": true\n   }, \n   "changed": false\n}\n')))}_.isMDXComponent=!0}}]);