angular.module('falabella',['ui.bootstrap','ngTable']);

angular.module('falabella').run(function ($rootScope) {
	$rootScope.sucursales = [
		{ id_sucursal: 1, id_zona: 1, zona: 'Zona Norte', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal A' },
		{ id_sucursal: 2, id_zona: 1, zona: 'Zona Norte', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal B' },
		{ id_sucursal: 3, id_zona: 1, zona: 'Zona Norte', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal C' },
		{ id_sucursal: 4, id_zona: 2, zona: 'Centro', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal D' },
		{ id_sucursal: 5, id_zona: 2, zona: 'Centro', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal E' },
		{ id_sucursal: 6, id_zona: 2, zona: 'Centro', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal G' },
		{ id_sucursal: 7, id_zona: 3, zona: 'Sur', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal H' },
		{ id_sucursal: 8, id_zona: 3, zona: 'Sur', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal I' },
		{ id_sucursal: 9, id_zona: 3, zona: 'Sur', direccion: 'direccion sucursal', telefono: '+56 9 9999 9999', sucursal: 'Sucursal J' }
	];
	// $rootScope.pantallas = [
	// 	{ id_pantalla: 1, id_sucursal: 1, id_zona: 1, ip: '200.27.62.1', modulo: 'Equipo A', duid: 'MTCPH5RIKNW21', version: '12.1', estado: true },
	// 	{ id_pantalla: 2, id_sucursal: 1, id_zona: 1, ip: '200.27.62.2', modulo: 'Equipo B', duid: 'MTCPH5RIKNW22', version: '12.1', estado: true },
	// 	{ id_pantalla: 3, id_sucursal: 2, id_zona: 1, ip: '200.27.62.3', modulo: 'Equipo A', duid: 'MTCPH5RIKNW23', version: '12.1', estado: true },
	// 	{ id_pantalla: 4, id_sucursal: 2, id_zona: 1, ip: '200.27.62.4', modulo: 'Equipo B', duid: 'MTCPH5RIKNW24', version: '12.1', estado: true },
	// 	{ id_pantalla: 5, id_sucursal: 2, id_zona: 1, ip: '200.27.62.5', modulo: 'Equipo C', duid: 'MTCPH5RIKNW25', version: '12.1', estado: true },
	// 	{ id_pantalla: 6, id_sucursal: 3, id_zona: 1, ip: '200.27.62.6', modulo: 'Equipo A', duid: 'MTCPH5RIKNW26', version: '12.1', estado: true },
	// 	{ id_pantalla: 7, id_sucursal: 3, id_zona: 1, ip: '200.27.62.7', modulo: 'Equipo B', duid: 'MTCPH5RIKNW27', version: '12.1', estado: true },
	// 	{ id_pantalla: 8, id_sucursal: 4, id_zona: 2, ip: '200.27.62.8', modulo: 'Equipo A', duid: 'MTCPH5RIKNW28', version: '12.1', estado: true },
	// 	{ id_pantalla: 9, id_sucursal: 4, id_zona: 2, ip: '200.27.62.9', modulo: 'Equipo B', duid: 'MTCPH5RIKNW29', version: '12.1', estado: true },
	// 	{ id_pantalla: 10, id_sucursal: 5, id_zona: 2, ip: '200.27.62.10', modulo: 'Equipo A', duid: 'MTCPH5RIKNW30', version: '12.1', estado: true },
	// 	{ id_pantalla: 11, id_sucursal: 5, id_zona: 2, ip: '200.27.62.11', modulo: 'Equipo B', duid: 'MTCPH5RIKNW31', version: '12.1', estado: true },
	// 	{ id_pantalla: 12, id_sucursal: 5, id_zona: 2, ip: '200.27.62.12', modulo: 'Equipo C', duid: 'MTCPH5RIKNW32', version: '12.1', estado: true },
	// 	{ id_pantalla: 13, id_sucursal: 6, id_zona: 2, ip: '200.27.62.13', modulo: 'Equipo A', duid: 'MTCPH5RIKNW33', version: '12.1', estado: true },
	// 	{ id_pantalla: 14, id_sucursal: 6, id_zona: 2, ip: '200.27.62.14', modulo: 'Equipo B', duid: 'MTCPH5RIKNW34', version: '12.1', estado: true },
	// 	{ id_pantalla: 15, id_sucursal: 6, id_zona: 2, ip: '200.27.62.15', modulo: 'Equipo C', duid: 'MTCPH5RIKNW35', version: '12.1', estado: true },
	// 	{ id_pantalla: 16, id_sucursal: 6, id_zona: 2, ip: '200.27.62.16', modulo: 'Equipo D', duid: 'MTCPH5RIKNW36', version: '12.1', estado: false },
	// 	{ id_pantalla: 17, id_sucursal: 7, id_zona: 3, ip: '200.27.62.17', modulo: 'Equipo A', duid: 'MTCPH5RIKNW37', version: '12.1', estado: true },
	// 	{ id_pantalla: 18, id_sucursal: 7, id_zona: 3, ip: '200.27.62.18', modulo: 'Equipo B', duid: 'MTCPH5RIKNW38', version: '12.1', estado: true },
	// 	{ id_pantalla: 19, id_sucursal: 8, id_zona: 3, ip: '200.27.62.19', modulo: 'Equipo A', duid: 'MTCPH5RIKNW39', version: '12.1', estado: true },
	// 	{ id_pantalla: 20, id_sucursal: 8, id_zona: 3, ip: '200.27.62.20', modulo: 'Equipo B', duid: 'MTCPH5RIKNW40', version: '12.1', estado: false },
	// 	{ id_pantalla: 21, id_sucursal: 9, id_zona: 3, ip: '200.27.62.21', modulo: 'Equipo A', duid: 'MTCPH5RIKNW41', version: '12.1', estado: true },
	// 	{ id_pantalla: 22, id_sucursal: 9, id_zona: 3, ip: '200.27.62.22', modulo: 'Equipo B', duid: 'MTCPH5RIKNW42', version: '12.1', estado: true },
	// 	{ id_pantalla: 23, id_sucursal: 9, id_zona: 3, ip: '200.27.62.23', modulo: 'Equipo C', duid: 'MTCPH5RIKNW43', version: '12.1', estado: true },
	// ];




});

/* temporal */
angular.module('falabella').controller('controller_login', function ($scope) {
	$scope.nombreCompleto = "Jose Chapa";
});
/* temporal */
angular.module('falabella').controller('informacionSucursal', function ($rootScope, $scope) {
	$scope.lasucursal = $rootScope.sucursales;
});

angular.module('falabella').controller('GraficoPie', function ($rootScope, $scope) {
	$http.get("https://dry-mesa-38623.herokuapp.com/api/pantallas")
    	.then(function(response) {
	  console.log(response);		
        $scope.pantallas = response;
    });	
	
	
	//$scope.pantallas = $rootScope.pantallas;

	var count = 0;
	var totales = 0;
	var pieact1 = 0;
	var pieact2 = 0;
	var pieact2ini = 0;
	var porcen1 = 0;
	var porcen2 = 0;
	angular.forEach($scope.pantallas, function (contador) {
		count += contador.estado ? 1 : 0;
		totales++;
	});

	pieact1 = (count * 360) / totales;
	porcen1 = (count * 100) / totales;
	porcen2 = (100 - porcen1);
	if (pieact1 > 180) {
		pieact2 = (pieact1 - 180);
		pieact2ini = 180;
		pieact1 = 180;
	}
	$scope.piepart1 = pieact1;
	$scope.piepart2ini = pieact2ini;
	$scope.piepart2 = pieact2;
	$scope.totalactivas = count;
	$scope.totalinactivas = totales - count;
	$scope.totaltotales = totales;
	$scope.porcentajeon = porcen1;
	$scope.porcentajeoff = porcen2;


});




angular.module('falabella').controller('busqueda', ['$scope', function ($rootScope, $scope) {
	$scope.lista = $rootScope.sucursales;
}]);



angular.module("falabella").controller("validador_formularios", function ($scope,$window) {
	$scope.submit_success = false;


 	//$scope.data = angular.copy($scope.PantallaOrig);


	$scope.resetpantalla = function () {
	 		$scope.miPantalla = angular.copy($scope.PantallaOrig);
	 		//$window.location.reload();
		//$scope.miPantalla = lapantalla;
	
	}	
	$scope.call = function () {
		$scope.server = angular.copy($scope.user);
		$scope.submit_success = true;
	}
});



angular.module('falabella').controller('AccordionDemoCtrl', function ($rootScope, $scope, $filter) {
	$scope.oneAtATime = true;
	$scope.todas = $rootScope.sucursales;
	$scope.status = { isFirstOpen: false, isFirstDisabled: false };

	$scope.filterSucursal = function (value) {


		$rootScope.filterId = value;
		$rootScope.pantallas = $filter('filter')($rootScope.pantallas, { id_sucursal: value });
		$rootScope.sucursales = $filter('filter')($rootScope.sucursales, { id_sucursal: value });
	};



});

// angular.module('falabella').controller('MostrarPantallas', function ($rootScope, $scope) {


// 	$scope.todaspantallas = $rootScope.pantallas;

// });



angular.module('falabella').controller('AppBody', function ($rootScope, $scope, $filter,$http,ngTableParams ) {
	



	$scope.oneAtATime = true;
	$scope.todas = $rootScope.sucursales;
	$scope.status = { isFirstOpen: false, isFirstDisabled: false };

	$scope.lasucursal = $rootScope.sucursales;
	//$scope.todaspantallas = $rootScope.pantallas;
	$scope.total = $rootScope.sucursales;
	$scope.pantalla = "TODAS";
	//$scope.prueba = "send";
	//$scope.filterZone = null;


 //    var data = {};
	// $http.get("https://dry-mesa-38623.herokuapp.com/api/pantallas")
 //    	.then(function(response) {
	//   console.log(response.data);		
 //        $scope.todaspantallas = response.data;
 //        var data = $scope.todaspantallas;
 //    });


//[{name: "Moroni", age: 50} ,{name: "John", age: 50},{name: "Moroni", age: 50}/*,*/];
//self.tableParams = new NgTableParams({}, { dataset: data});


$http.get('https://dry-mesa-38623.herokuapp.com/api/pantallas')
  .then(function(data, status) {
    $scope.data = data.data;
    $scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        sorting: {
            foo: 'asc'     // initial sorting
        }
    }, {
        total: $scope.data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.sorting() ?
                                $filter('orderBy')($scope.data, params.orderBy()) :
                                $scope.data;

            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        }
      });
  });


	$scope.filterSucursal = function (value) {
		$scope.filterId = value;
		//$scope.filterZone = value;
		//alert(value); 
	};

	$scope.filterZona = function (value) {
		$scope.filterId = undefined;
		if (value != 0) {
			$scope.filterZone = value;
		} else if (value == 0) {
			$scope.filterZone = undefined;
		}
	};

	$scope.ZonaName = function (value) {
		//alert(value);
		$scope.pantalla = value;


	};





	$scope.selectPantalla = function (lapantalla) {
		$scope.miPantalla = lapantalla;
		$scope.PantallaOrig = angular.copy(lapantalla);
	}
	$scope.selectSucursal = function (estasucursal) {
		$scope.miSucursal = estasucursal;
	}

	$scope.enviado = function () {
		return $scope.alertadeenvio = true;
	}
	$scope.enviado2 = function () {
		return $scope.alertadeenvio2 = true;
	}


});


angular.module('falabella').controller('appCtrl', function ($rootScope, $scope) {
	$scope.total = $rootScope.sucursales;

});



