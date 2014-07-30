DATA = new Meteor.Collection('data');

Meteor.methods({
  rem: function (id) {
    DATA.update({_s_n: "sno", env_id: id}, {$unset: {env_id: ""}});
    DATA.remove({_id: id});
  }
});

if (Meteor.isClient) {

  Template.hello.date = function () {
    return DATA.find({_s_n: "date"});
  };

  Template.date_tem.helpers({
    sno: function () {
      return DATA.find({_s_n: "sno", date_id: this._id});
    },
    envelop: function () {
      return DATA.find({_s_n: "env", date_id: this._id});
    },
    val_sno: function () {
      return Session.get(this._id + "in_sno");
    },
    val_amt: function () {
      return Session.get(this._id + "in_sno_amt");
    },
    val_client: function () {
      return Session.get(this._id + "in_sno_client");
    },
    val_env_from: function () {
      return Session.get(this._id + "in_env_from");
    },
    val_1000: function () {
      return Session.get(this._id + "1000");
    },
    val_500: function () {
      return Session.get(this._id + "500");
    },
    val_100: function () {
      return Session.get(this._id + "100");
    },
    val_50: function () {
      return Session.get(this._id + "50");
    },
    val_20: function () {
      return Session.get(this._id + "20");
    },
    val_10: function () {
      return Session.get(this._id + "10");
    },
    val_5: function () {
      return Session.get(this._id + "5");
    },
    val_2: function () {
      return Session.get(this._id + "2");
    },
    val_1: function () {
      return Session.get(this._id + "1");
    },
    val_05: function () {
      return Session.get(this._id + "05");
    }
  });

  Template.sno_tem.helpers({

    ifa: function () {
      if (this.env_id) {
        return Template.reciever_tem;
      } else {
        return Template.checkbox_tem;
      }

    }
  });

  Template.envelop_tem.helpers({

    env_sno: function () {
      return DATA.find({_s_n: "sno", env_id: this._id});

    },
    n_1000_total: function () {
      if (this.n_1000) {
        return this.n_1000 * 1000;
      }
    },
    n_500_total: function () {
      if (this.n_500) {
        return this.n_500 * 500;
      }
    },
    n_100_total: function () {
      if (this.n_100) {
        return this.n_100 * 100;
      }
    },
    n_50_total: function () {
      if (this.n_50) {
        return this.n_50 * 50;
      }
    },
    n_20_total: function () {
      if (this.n_20) {
        return this.n_20 * 20;
      }
    },
    n_10_total: function () {
      if (this.n_10) {
        return this.n_10 * 10;
      }
    },
    n_5_total: function () {
      if (this.n_5) {
        return this.n_5 * 5;
      }
    },
    n_2_total: function () {
      if (this.n_2) {
        return this.n_2 * 2;
      }
    },
    n_1_total: function () {
      if (this.n_1) {
        return this.n_1 * 1;
      }
    },
    n_05_total: function () {
      if (this.n_05) {
        return this.n_05 * 0.5;
      }
    }
  });

  Template.reciever_tem.helpers({

    reciever: function () {
      env = DATA.findOne({_id: this.env_id});
      if (env) {
        return env.reciever;
      }

    }
  });

  Template.hello.events({
    'click .add_date': function () {
      DATA.insert({_s_n: "date", date: new Date()});
    },


  });

  Template.date_tem.events({

    'blur .in_sno': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "in_sno") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "in_sno", e.currentTarget.value);
      }
    },

    'blur .in_sno_client': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "in_sno_client") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "in_sno_client", e.currentTarget.value);
      }

    },

    'blur .in_sno_amt': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "in_sno_amt") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "in_sno_amt", Number(e.currentTarget.value));
      }

    },

    'blur .in_env_from': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "in_env_from") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "in_env_from", e.currentTarget.value);
      }

    },

    'blur .1000': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "1000") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "1000", Number(e.currentTarget.value));
      }

    },

    'blur .500': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "500") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "500", Number(e.currentTarget.value));
      }

    },

    'blur .100': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "100") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "100", Number(e.currentTarget.value));
      }

    },

    'blur .50': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "50") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "50", Number(e.currentTarget.value));
      }

    },

    'blur .20': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "20") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "20", Number(e.currentTarget.value));
      }

    },

    'blur .10': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "10") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "10", Number(e.currentTarget.value));
      }

    },

    'blur .5': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "5") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "5", Number(e.currentTarget.value));
      }

    },
    'blur .2': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "2") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "2", Number(e.currentTarget.value));
      }

    },

    'blur .1': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "1") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "1", Number(e.currentTarget.value));
      }

    },

    'blur .05': function (e, t) {
      if (e.currentTarget.value !== Session.get(this._id + "05") && (e.currentTarget.value !== "") ) {
        Session.set(this._id + "05", Number(e.currentTarget.value));
      }

    },

    'click .add_sno': function () {
      var sno = Session.get(this._id + "in_sno");
      var sno_amt = Session.get(this._id + "in_sno_amt");
      var sno_client = Session.get(this._id + "in_sno_client");
      DATA.insert({_s_n: "sno", sno: sno, amount: Number(sno_amt), client: sno_client, date_id: this._id});
      Session.set(this._id + "in_sno", false);
      Session.set(this._id + "in_sno_amt", false);
      Session.set(this._id + "in_sno_client", false);
    },

    'click .add_env': function () {
      var n_1000 = Session.get(this._id + "1000");
      var n_500 = Session.get(this._id + "500");
      var n_100 = Session.get(this._id + "100");
      var n_50 = Session.get(this._id + "50");
      var n_20 = Session.get(this._id + "20");
      var n_10 = Session.get(this._id + "10");
      var n_5 = Session.get(this._id + "5");
      var n_2 = Session.get(this._id + "2");
      var n_1 = Session.get(this._id + "1");
      var n_05 = Session.get(this._id + "05");
      var reciever = Session.get(this._id + "in_env_from");
      var sno_arr = Session.get(this._id + "sno_arr");
      if (reciever && sno_arr) {
        var obj = {};
        obj._s_n = "env";
        obj.reciever = reciever;
        obj.date_id = this._id;
        if (n_1000 && Number(n_1000)) {
          obj.n_1000 = Number(n_1000);
        }
        if (n_500 && Number(n_500)) {
          obj.n_500 = Number(n_500);
        }
        if (n_100 && Number(n_100)) {
          obj.n_100 = Number(n_100);
        }
        if (n_50 && Number(n_50)) {
          obj.n_50 = Number(n_50);
        }
        if (n_10 && Number(n_10)) {
          obj.n_10 = Number(n_10);
        }
        if (n_5 && Number(n_5)) {
          obj.n_5 = Number(n_5);
        }
        if (n_2 && Number(n_2)) {
          obj.n_2 = Number(n_2);
        }
        if (n_1 && Number(n_1)) {
          obj.n_1 = Number(n_1);
        }
        if (n_05 && Number(n_05)) {
          obj.n_05 = Number(n_05);
        }
        var env_id = DATA.insert(obj);
        for (var i = 0; i < sno_arr.length; i++) {
          DATA.update({_id: sno_arr[i]}, {$set: {env_id: env_id}});
        }

        Session.set(this._id + "1000", false);
        Session.set(this._id + "500", false);
        Session.set(this._id + "100", false);
        Session.set(this._id + "50", false);
        Session.set(this._id + "20", false);
        Session.set(this._id + "10", false);
        Session.set(this._id + "5", false);
        Session.set(this._id + "2", false);
        Session.set(this._id + "1", false);
        Session.set(this._id + "05", false);
        Session.set(this._id + "in_env_from", false);
        Session.set(this._id + "sno_arr", false);
      }

    },

    'click .del_date': function () {
      DATA.remove({_id: this._id});
    }


  });

  Template.sno_tem.events({
    'click .del_sno': function () {
      DATA.remove({_id: this._id});
    }
  });

  Template.envelop_tem.events({
    'click .del_env': function () {
      Meteor.call('rem', this._id);

    }
  });

  Template.checkbox_tem.events({
    'change .check': function (e, t) {
      Blaze.currentView = t.__view__;
      var parent = Blaze._parentData(1);
      var dat = Session.get(parent._id + "sno_arr");
      if (e.currentTarget.checked) {
        if (dat && Array.isArray(dat)) {
          if (dat.indexOf(e.currentTarget.value) === -1 ) {
            dat.push(e.currentTarget.value);
            Session.set(parent._id + "sno_arr", dat);
          }
        } else {
          var m = [e.currentTarget.value];
          Session.set(parent._id + "sno_arr", m);
        }
      } else {
        if (dat && Array.isArray(dat)) {
          if (dat.indexOf(e.currentTarget.value) !== -1 ) {
            var index = dat.indexOf(e.currentTarget.value);
            dat.splice(index, 1);
            Session.set(parent._id + "sno_arr", dat);
          }
        }
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
