var base = require("../../client/base");

var AZManager = require("./availability_zones"),
    CertsManager = require("./certs"),
    FlavorManager = require("./flavors"),
    FloatingIPManager = require('./floating_ips'),
    ImageManager = require('./images'),
    KeypairManager = require('./keypairs'),
    LimitManager = require('./limits'),
    QuotaManager = require('./quotas'),
    SecurityGroupManager = require('./security_groups'),
    SecurityGroupRuleManager = require('./security_group_rules'),
    ServerManager = require("./servers");


var Nova = base.Client.extend({
  service_type: "compute",
  version: "1.1",

  init: function (options) {
    this._super(options);

    this.availability_zones = new AZManager(this);
    this.certs = new CertsManager(this);
    this.flavors = new FlavorManager(this);
    this.floating_ips = new FloatingIPManager(this);
    this.images = new ImageManager(this);
    this.keypairs = new KeypairManager(this);
    this.limits = new LimitManager(this);
    this.quotas = new QuotaManager(this);
    this.security_groups = new SecurityGroupManager(this);
    this.security_group_rules = new SecurityGroupRuleManager(this);
    this.servers = new ServerManager(this);
  }
});

module.exports = Nova;
