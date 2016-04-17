// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;
    
Constellation.addTab({
  name: 'Tiny',
  headerContentTemplate: 'Constellation_tiny',
  noOpen: true,
  onClick: "toggleTinyInterface"
});

Constellation.registerCallbacks({
  toggleTinyInterface : function () {
	TinyDict.set('Constellation_tiny', !TinyDict.get('Constellation_tiny'));
	toggleTiny(TinyDict.get('Constellation_tiny'));
  }
});

TinyDict = new ReactiveDict('constellation-tiny');

var toggleTiny = function (isTiny) {
  var constellationClasses = Package["constellation:console"].Constellation.ConstellationDict.get('Constellation_baseClasses');
  if (isTiny) {
	constellationClasses += 'Constellation-tiny ';
  }
  else {
	constellationClasses = constellationClasses.replace(/Constellation-tiny /, '');
  }
  Package["constellation:console"].Constellation.ConstellationDict.set('Constellation_baseClasses', constellationClasses);
}

Template.Constellation_tiny.helpers({
  tiny: function () {
    return TinyDict.get('Constellation_tiny');  
  }
});
	