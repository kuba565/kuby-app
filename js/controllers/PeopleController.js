app.controller('PeopleController', ['$scope', '$routeParams', function ($scope, $routeParams) {

    var backendUrl = "https://4sk1dq6024.execute-api.eu-west-1.amazonaws.com/prod";

    $scope.peopleList = [];

    $scope.groups = [];


    $scope.add = function () {

        $scope.addedEmail = $scope.addedName + '.' + $scope.addedLastName + '@gmail.com';

        if ($scope.addedName && $scope.addedDate && $scope.addedLastName) {

            var peopleListData = {
                name: $scope.addedName,
                lastName: $scope.addedLastName,
                date: $scope.addedDate,
                email: $scope.addedEmail
            };
            $scope.peopleList.push(peopleListData);
        } else if (!$scope.addedName && !$scope.addedDate && !$scope.addedLastName) {
            alert('Enter a name, last name and a date!');
        } else if (!$scope.addedName) {
            alert('Enter a name!');
        } else if (!$scope.addedDate) {
            alert('Enter a date!');
        }else if (!scope.addedLastName){
            alert('Enter a last name!')
        }
        $scope.addedName = "";
        $scope.addedDate = "";
        $scope.addedLastName = "";
        $scope.addedEmail = ""
    };

    $scope.random = function () {
        var losowa = Math.floor(Math.random() * $scope.peopleList.length);
        $scope.result = $scope.peopleList[losowa];
    };

    $scope.randomFromGroup = function ($index) {
        var randomGroupIndex = Math.floor(Math.random() * $scope.groups.length);
        var randomPersonIndex = Math.floor(Math.random() * $scope.groups[randomGroupIndex].length);

        $scope.resultGroup = $scope.groups[randomGroupIndex][randomPersonIndex]

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

        var randomEmail = randomName.toLowerCase() + '.' + randomSurname.toLowerCase() + '@gmail.com';

        counter += 1;
        $scope.peopleList.push({
            name: randomName,
            lastName: randomSurname + ' ' + counter,
            date: randomDate,
            email: randomEmail
        });
    };

    $scope.remove = function (index) {

        $scope.peopleList.splice(index, 1)


    };
    $scope.removeFromGroup = function (groupIndex, index) {

        $scope.groups[groupIndex].splice(index, 1)


    };

    $scope.clear = function () {

        $scope.peopleList.splice(0);

    };

    $scope.clearGroup = function (groupIndex) {

        $scope.groups[groupIndex].splice(0);

    };

    $scope.reset = function () {
        counter = 0;
    };

    $scope.addToGroup = function (index) {

        var chosenPerson = $scope.peopleList[index];

        var personToBeAddedToGroup = {

            name: chosenPerson.name,
            lastName: chosenPerson.lastName,
            date: chosenPerson.date,
            email: chosenPerson.email
        };

        $scope.peopleList.splice(index, 1);


        var groupIndex = chooseGroup();

        if (!$scope.groups[groupIndex]) {
            $scope.groups[groupIndex] = [];
        }

        $scope.groups[groupIndex].push(personToBeAddedToGroup);

    };

    function chooseGroup() {
        for (var i = 0; i<$scope.groups.length; i++) {
            //sprawdzamy czy w grupie o indeksie i sa juz 3 osoby jesli nie, to zwracamy ten indeks grupy
            var numOfPeopleInGroup = $scope.groups[i].length;
            if (numOfPeopleInGroup < 3) {
                return i;
            }
        }

        return $scope.groups.length;
    }

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

    $scope.mailGroup = function () {
        var emailContent = 'Hello!'


    };

    $scope.sortLastName = function (groupIndex) {

        $scope.groups[groupIndex] = _.sortBy($scope.groups[groupIndex], 'lastName')
    };
    $scope.sortName = function (groupIndex) {

        $scope.groups[groupIndex] = _.sortBy($scope.groups[groupIndex], 'name')
    };
    $scope.sortYear = function (groupIndex) {

        $scope.groups[groupIndex] = _.sortBy($scope.groups[groupIndex], 'date')
    };



    $scope.sortLastNameList = function () {

        $scope.peopleList = _.sortBy($scope.peopleList, 'lastName')
    };
    $scope.sortNameList = function () {

        $scope.peopleList = _.sortBy($scope.peopleList, 'name')
    };
    $scope.sortYearList = function () {

        $scope.peopleList = _.sortBy($scope.peopleList, 'date')
    }
}]);
