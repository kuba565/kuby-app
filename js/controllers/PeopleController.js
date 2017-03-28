app.controller('PeopleController', ['$scope', '$routeParams', function($scope, $routeParams) {
    $scope.peopleList = [
        {name: 'osoba 1', date: 'rok: ' + 2017},
        {name: 'osoba 2', date: 'rok: ' + 2016},
        {name: 'osoba 3', date: 'rok: ' + 2015},
        {name: 'osoba 4', date: 'rok: ' + 2014}
    ];
    $scope.add = function() {
        if($scope.addedName && $scope.addedDate) {
            $scope.peopleList.push({name: $scope.addedName, date: $scope.addedDate});
        } else if(!$scope.addedName){
            alert('Wpisz imię!');
        } else if(!$scope.addedDate){
            alert('Wpisz datę!');
        }
        $scope.addedName = "";
        $scope.addedDate = "";
    };

    $scope.random = function () {
        var losowa = Math.floor(Math.random() * $scope.peopleList.length);
       $scope.result = $scope.peopleList[losowa];
    };

    $scope.generate = function () {
        var randomNumber1to100 = Math.floor(Math.random()*100);
        var randomDate = Math.floor(Math.random()*2017);

        var r = confirm("Chcesz dodać losową osobę?");
        if (r === true) {
            $scope.peopleList.push({name: 'osoba ' + randomNumber1to100, date: randomDate + ' rok' });
            alert('dodano: osoba ' + randomNumber1to100 +'\n' +'rok: ' + randomDate )
        } else {
            alert("Nie dodano osoby :(");
        }

    }
}]);
