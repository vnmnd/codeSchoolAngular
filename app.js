(function(){
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){
    this.products = gems; 
  });

  app.controller("PanelController", function(){
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    }
  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: '. . .',
      canPurchase: true,
      soldOut: false,
      images: [
        "images/gem-01.gif",
        "images/gem-02.gif"
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: ". . .",
      canPurchase: false,
      images: [
        "images/gem-03.gif",
        "images/gem-04.gif"
      ]
    }
  ];  
})();
