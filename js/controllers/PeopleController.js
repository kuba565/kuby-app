app.controller('PeopleController', ['$scope', '$routeParams', function ($scope, $routeParams) {
    $scope.peopleList = [];

    $scope.groupList = [];

    $scope.add = function () {
        if ($scope.addedName && $scope.addedDate) {
            $scope.peopleList.push({name: $scope.addedName, lastName: $scope.addedLastName, date: $scope.addedDate});
        } else if (!$scope.addedName && !$scope.addedDate) {
            alert('Enter a name and a date!');
        } else if (!$scope.addedName) {
            alert('Enter a name!');
        } else if (!$scope.addedDate) {
            alert('Enter a date!');
        }
        $scope.addedName = "";
        $scope.addedDate = "";
        $scope.addedLastName = "";
    };

    $scope.random = function () {
        var losowa = Math.floor(Math.random() * $scope.peopleList.length);
        $scope.result = $scope.peopleList[losowa];
    };

    var counter = 0;

    $scope.generate = function () {

        var randomDate = Math.floor(Math.random() * 67) + 1920;
        var randomLastNameNumber = Math.floor(Math.random() * $scope.lastnameList.length);
        var randomNameNumber = Math.floor(Math.random() * $scope.namesList.length);

        var firstSurnameLetter = $scope.lastnameList[randomLastNameNumber].substring(0, 1);

        var surnameRemainder = $scope.lastnameList[randomLastNameNumber].substring(1).toLowerCase();

        var randomSurname = firstSurnameLetter + surnameRemainder;

        var randomName = $scope.namesList[randomNameNumber];


        counter += 1;
        $scope.peopleList.push({name: randomName, lastName: randomSurname + ' ' + counter, date: randomDate});
    };

    $scope.remove = function (index) {

        $scope.peopleList.splice(index, 1)


    };

    $scope.clear = function () {

        $scope.peopleList.splice(0);

    };

    $scope.reset = function () {
        counter = 0;
    };

    $scope.addToGroup = function (index) {

        var chosenPerson = $scope.peopleList[index];

        var personToBeAddedToGroup = {

            name: chosenPerson.name,
            lastName: chosenPerson.lastName,
            date: chosenPerson.date
        };

        $scope.peopleList.splice(index, 1);


        $scope.groupList.push(personToBeAddedToGroup);
    };

    $scope.lastnameList = [

        'SMITH',
        'JONES',
        'BROWN',
        'JOHNSON',
        'WILLIAMS',
        'MILLER',
        'TAYLOR',
        'WILSON'

    ];

    $scope.namesList = [

        'Emma',
        'Noah',
        'Olivia',
        'Liam',
        'Sophia',
        'Mason',
        'Ava',
        'Jacob',
        'Isabella',
        'William',
        'Mia',
        'Ethan'
    ];

}]);
