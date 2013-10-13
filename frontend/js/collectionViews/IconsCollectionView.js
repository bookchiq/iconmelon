// Generated by CoffeeScript 1.6.2
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('collectionViews/IconsCollectionView', ['collectionViews/ProtoCollectionView', 'views/IconView'], function(ProtoView, IconView) {
    var IconsCollectionView, _ref;

    IconsCollectionView = (function(_super) {
      __extends(IconsCollectionView, _super);

      function IconsCollectionView() {
        _ref = IconsCollectionView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      IconsCollectionView.prototype.itemView = IconView;

      IconsCollectionView.prototype.template = '#icons-collection-view-template';

      return IconsCollectionView;

    })(ProtoView);
    return IconsCollectionView;
  });

}).call(this);
