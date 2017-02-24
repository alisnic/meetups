// Generated by CoffeeScript 1.12.2
(function() {
  var CoffeeSupplier, SteelSupplier, Supplier, rob, steelTerra,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  Supplier = (function() {
    function Supplier(name) {
      this.name = name;
    }

    Supplier.prototype.supply = function(amount, uniteOfMeasurement) {
      if (uniteOfMeasurement == null) {
        uniteOfMeasurement = 'pieces';
      }
      return this.name + ' supplied ' + amount + ' ' + uniteOfMeasurement;
    };

    return Supplier;

  })();

  CoffeeSupplier = (function(superClass) {
    extend(CoffeeSupplier, superClass);

    function CoffeeSupplier() {
      return CoffeeSupplier.__super__.constructor.apply(this, arguments);
    }

    CoffeeSupplier.prototype.supply = function(amount, uniteOfMeasurement) {
      if (uniteOfMeasurement == null) {
        uniteOfMeasurement = 'kg';
      }
      return (CoffeeSupplier.__super__.supply.call(this, amount, uniteOfMeasurement)) + 'of  coffee';
    };

    return CoffeeSupplier;

  })(Supplier);

  SteelSupplier = (function(superClass) {
    extend(SteelSupplier, superClass);

    function SteelSupplier() {
      return SteelSupplier.__super__.constructor.apply(this, arguments);
    }

    SteelSupplier.prototype.supply = function(amount, uniteOfMeasurement) {
      if (uniteOfMeasurement == null) {
        uniteOfMeasurement = 'tons';
      }
      return (SteelSupplier.__super__.supply.call(this, amount, uniteOfMeasurement)) + 'of  steel';
    };

    return SteelSupplier;

  })(Supplier);

  rob = new CoffeeSupplier('Rob Johnson');

  steelTerra = new SteelSupplier('SteelTerra Inc');

  alert(rob.supply(20));

  alert(steelTerra.supply(95));

}).call(this);

//# sourceMappingURL=classes-destructing.js.map