app.controller('PeopleController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.peopleList = [
        {name: 'person 1', date: 2017},
        {name: 'person 2', date: 2016},
        {name: 'person 3', date: 2015},
        {name: 'person 4', date: 2014}
    ];
    $scope.add = function () {
        if ($scope.addedName && $scope.addedDate) {
            $scope.peopleList.push({name: $scope.addedName, date: $scope.addedDate});
        } else if (!$scope.addedName && !$scope.addedDate) {
            alert('Enter a name and a date!');
        } else if (!$scope.addedName) {
            alert('Enter a name!');
        } else if (!$scope.addedDate) {
            alert('Enter a date!');
        }
        $scope.addedName = "";
        $scope.addedDate = "";
    };

    $scope.random = function () {
        var losowa = Math.floor(Math.random() * $scope.peopleList.length);
        $scope.result = $scope.peopleList[losowa];
    };

    $scope.generate = function () {
        var randomNumber1to100 = Math.floor(Math.random() * 100);
        var randomDate = Math.floor(Math.random() * 67) + 1950;

        var r = confirm("Do you wish to add a randomly generated person?");
        if (r === true) {
            $scope.peopleList.push({name: 'person ' + randomNumber1to100, date: randomDate});
            alert("added: " + '\n' + 'person ' + randomNumber1to100 + '\n' + 'year: ' + randomDate)
        } else {
            alert("No person added :(");
        }

    }
}]);
