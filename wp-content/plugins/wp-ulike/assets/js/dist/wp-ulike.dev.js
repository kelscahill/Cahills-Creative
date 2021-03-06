"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t, e, i, s) {
  "use strict";

  var n = {
    messageType: "success",
    messageText: "Hello World!",
    timeout: 8e3,
    messageElement: "wpulike-message",
    notifContainer: "wpulike-notification"
  };

  function l(e, i) {
    this.element = e, this.$element = t(e), this.settings = t.extend({}, n, i), this._defaults = n, this._name = "WordpressUlikeNotifications", this.init();
  }

  t.extend(l.prototype, {
    init: function init() {
      this._message(), this._container(), this._append(), this._remove();
    },
    _message: function _message() {
      this.$messageElement = t("<div/>").addClass(this.settings.messageElement + " wpulike-" + this.settings.messageType).text(this.settings.messageText);
    },
    _container: function _container() {
      t("." + this.settings.notifContainer).length || this.$element.append(t("<div/>").addClass(this.settings.notifContainer)), this.$notifContainer = this.$element.find("." + this.settings.notifContainer);
    },
    _append: function _append() {
      this.$notifContainer.append(this.$messageElement).trigger("WordpressUlikeNotificationAppend");
    },
    _remove: function _remove() {
      var e = this;
      this.$messageElement.click(function () {
        t(this).fadeOut(300, function () {
          t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove();
        }).trigger("WordpressUlikeRemoveNotification");
      }), e.settings.timeout && setTimeout(function () {
        e.$messageElement.fadeOut(300, function () {
          t(this).remove(), t("." + e.settings.messageElement).length || e.$notifContainer.remove();
        }).trigger("WordpressUlikeRemoveNotification");
      }, e.settings.timeout);
    }
  }), t.fn.WordpressUlikeNotifications = function (t) {
    return this.each(function () {
      new l(this, t);
    });
  };
}(jQuery, window, document), function (t, e, i, s) {
  "use strict";

  t(e);
  var n = t(i),
      l = {
    ID: 0,
    nonce: 0,
    type: "",
    append: "",
    appendTimeout: 2e3,
    displayLikers: !1,
    disablePophover: !0,
    isTotal: !1,
    factor: "",
    template: "",
    counterSelector: ".count-box",
    generalSelector: ".wp_ulike_general_class",
    buttonSelector: ".wp_ulike_btn",
    likersSelector: ".wp_ulike_likers_wrapper"
  },
      a = {
    "ulike-id": "ID",
    "ulike-nonce": "nonce",
    "ulike-type": "type",
    "ulike-append": "append",
    "ulike-is-total": "isTotal",
    "ulike-display-likers": "displayLikers",
    "ulike-disable-pophover": "disablePophover",
    "ulike-append-timeout": "appendTimeout",
    "ulike-factor": "factor",
    "ulike-template": "template"
  };

  function o(e, i) {
    for (var s in this.element = e, this.$element = t(e), this.settings = t.extend({}, l, i), this._defaults = l, this._name = "WordpressUlike", this.buttonElement = this.$element.find(this.settings.buttonSelector), this.generalElement = this.$element.find(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector), this.likersElement = this.$element.find(this.settings.likersSelector), a) {
      var n = this.buttonElement.data(s);
      void 0 !== n && (this.settings[a[s]] = n);
    }

    this.init();
  }

  t.extend(o.prototype, {
    init: function init() {
      this.buttonElement.click(this._initLike.bind(this)), this.generalElement.one("mouseenter", this._updateLikers.bind(this));
    },
    _ajax: function _ajax(e, i) {
      t.ajax({
        url: wp_ulike_params.ajax_url,
        type: "POST",
        cache: !1,
        dataType: "json",
        data: e
      }).done(i);
    },
    _initLike: function _initLike(t) {
      t.stopPropagation(), this._maybeUpdateElements(t), this._updateSameButtons(), this._updateSameLikers(), this.buttonElement.prop("disabled", !0), n.trigger("WordpressUlikeLoading", this.element), this.generalElement.addClass("wp_ulike_is_loading"), this._ajax({
        action: "wp_ulike_process",
        id: this.settings.ID,
        nonce: this.settings.nonce,
        factor: this.settings.factor,
        type: this.settings.type,
        template: this.settings.template,
        displayLikers: this.settings.displayLikers,
        disablePophover: this.settings.disablePophover
      }, function (t) {
        this.generalElement.removeClass("wp_ulike_is_loading"), t.success ? (this._updateMarkup(t), this._appendChild()) : this._sendNotification("error", t.data), this.buttonElement.prop("disabled", !1), n.trigger("WordpressUlikeUpdated", this.element);
      }.bind(this));
    },
    _maybeUpdateElements: function _maybeUpdateElements(e) {
      this.buttonElement = t(e.currentTarget), this.generalElement = this.buttonElement.closest(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector), this.settings.factor = this.buttonElement.data("ulike-factor");
    },
    _appendChild: function _appendChild() {
      if ("" !== this.settings.append) {
        var e = t(this.settings.append);
        this.buttonElement.append(e), this.settings.appendTimeout && setTimeout(function () {
          e.detach();
        }, this.settings.appendTimeout);
      }
    },
    _updateMarkup: function _updateMarkup(t) {
      this._setSbilingElement(), this._setSbilingButtons(), this._updateGeneralClassNames(t.data.status), null !== t.data.data && (t.data.status < 5 && (this.__updateCounter(t.data.data), this.settings.displayLikers && void 0 !== t.data.likers && this._updateLikersMarkup(t.data.likers)), this._updateButton(t.data.btnText, t.data.status)), this._sendNotification(t.data.messageType, t.data.message);
    },
    _updateGeneralClassNames: function _updateGeneralClassNames(t) {
      var e = "wp_ulike_is_not_liked",
          i = "wp_ulike_is_liked",
          s = "wp_ulike_is_unliked",
          n = "wp_ulike_click_is_disabled";

      switch (this.siblingElement.length && this.siblingElement.removeClass(this._arrayToString([i, s])), t) {
        case 1:
          this.generalElement.addClass(i).removeClass(e), this.generalElement.children().first().addClass(n);
          break;

        case 2:
          this.generalElement.addClass(s).removeClass(i);
          break;

        case 3:
          this.generalElement.addClass(i).removeClass(s);
          break;

        default:
          this.generalElement.addClass(n), this.siblingElement.length && this.siblingElement.addClass(n);
      }
    },
    _arrayToString: function _arrayToString(t) {
      return t.join(" ");
    },
    _setSbilingElement: function _setSbilingElement() {
      this.siblingElement = this.generalElement.siblings();
    },
    _setSbilingButtons: function _setSbilingButtons() {
      this.siblingButton = this.buttonElement.siblings(this.settings.buttonSelector);
    },
    __updateCounter: function __updateCounter(t) {
      "object" != _typeof(t) ? this.counterElement.text(t) : this.settings.isTotal && void 0 !== t.sub ? this.counterElement.text(t.sub) : "down" === this.settings.factor ? (this.counterElement.text(t.down), this.siblingElement.length && this.siblingElement.find(this.settings.counterSelector).text(t.up)) : (this.counterElement.text(t.up), this.siblingElement.length && this.siblingElement.find(this.settings.counterSelector).text(t.down)), n.trigger("WordpressUlikeCounterUpdated", [this.buttonElement]);
    },
    _updateLikers: function _updateLikers() {
      this.settings.displayLikers && !this.likersElement.length && (this.generalElement.addClass("wp_ulike_is_getting_likers_list"), this._ajax({
        action: "wp_ulike_get_likers",
        id: this.settings.ID,
        nonce: this.settings.nonce,
        type: this.settings.type,
        displayLikers: this.settings.displayLikers,
        disablePophover: this.settings.disablePophover
      }, function (t) {
        this.generalElement.removeClass("wp_ulike_is_getting_likers_list"), t.success && this._updateLikersMarkup(t.data);
      }.bind(this)));
    },
    _updateLikersMarkup: function _updateLikersMarkup(e) {
      this.likersElement.length || (this.likersElement = t("<div>", {
        "class": e["class"]
      }).appendTo(this.$element)), e.template ? this.likersElement.show().html(e.template) : this.likersElement.hide();
    },
    _updateSameButtons: function _updateSameButtons() {
      var t = void 0 !== this.settings.factor ? "_" + this.settings.factor : "";
      this.sameButtons = n.find(".wp_" + this.settings.type.toLowerCase() + t + "_btn_" + this.settings.ID), this.sameButtons.length > 1 && (this.buttonElement = this.sameButtons, this.generalElement = this.buttonElement.closest(this.settings.generalSelector), this.counterElement = this.generalElement.find(this.settings.counterSelector));
    },
    _updateSameLikers: function _updateSameLikers() {
      this.sameLikers = n.find(".wp_" + this.settings.type.toLowerCase() + "_likers_" + this.settings.ID), this.sameLikers.length > 1 && (this.likersElement = this.sameLikers);
    },
    _getLikersElement: function _getLikersElement() {
      return this.likersElement;
    },
    _updateButton: function _updateButton(t, e) {
      this.buttonElement.hasClass("wp_ulike_put_image") ? (this.buttonElement.toggleClass("image-unlike wp_ulike_btn_is_active"), this.siblingElement.length && this.siblingElement.find(this.settings.buttonSelector).removeClass("image-unlike wp_ulike_btn_is_active"), this.siblingButton.length && this.siblingButton.removeClass("image-unlike wp_ulike_btn_is_active")) : this.buttonElement.hasClass("wp_ulike_put_text") && null !== t && ("object" != _typeof(t) ? this.buttonElement.find("span").html(t) : "down" === this.settings.factor ? (this.buttonElement.find("span").html(t.down), this.siblingElement.length && this.siblingElement.find(this.settings.buttonSelector).find("span").html(t.up)) : (this.buttonElement.find("span").html(t.up), this.siblingElement.length && this.siblingElement.find(this.settings.buttonSelector).find("span").html(t.down)));
    },
    _sendNotification: function _sendNotification(e, s) {
      "1" === wp_ulike_params.notifications && t(i.body).WordpressUlikeNotifications({
        messageType: e,
        messageText: s
      });
    }
  }), t.fn.WordpressUlike = function (e) {
    return this.each(function () {
      t.data(this, "plugin_WordpressUlike") || t.data(this, "plugin_WordpressUlike", new o(this, e));
    });
  };
}(jQuery, window, document), function (t) {
  t(function () {
    t(this).bind("DOMNodeInserted", function (e) {
      t(".wpulike").WordpressUlike();
    });
  }), t(".wpulike").WordpressUlike();
}(jQuery);