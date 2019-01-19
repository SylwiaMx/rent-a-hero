(function() {
  var app = angular.module("myApp", []);

  // Service


  // Controller
  app.controller("Controller", ["$scope",
    function($scope) {
      var dataRow =  {
        "id": "",
        "name":"",
        "description":"",
        "image":"",
        "price":"",
        "isAvailable":""
    };
      $scope.datas = [];
$scope.datas = [
    {
        "id":1,
        "name":"Groot nr 1",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus.",
        "image":"./images/groot1.jpg",
        "price":"3000 zl / h",
        "isAvailable":"true"
    },
    {
        "id":2,
        "name":"Groot nr 2",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus.",
        "image":"./images/groot2.jpg",
        "price":"2500 zl / h",
        "isAvailable":"true"
    },
    {
        "id":3,
        "name":"Groot nr 3",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus. ",
        "image":"./images/groot3.jpg",
        "price":"2000 zl / h",
        "isAvailable":"true"
    },

    {
        "id":4,
        "name":"Groot nr 4",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus.",
        "image":"./images/groot4.jpg",
        "price":"1500 zl / h",
        "isAvailable":"true"
    },
    {
        "id":5,
        "name":"Groot nr 5",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus. ",
        "image":"./images/groot5.jpg",
        "price":"1000 zl / h",
        "isAvailable":"true"
    },
    {
        "id":6,
        "name":"Groot nr 6",
        "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae luctus ligula. Donec non tempus urna, et eleifend metus. Nunc justo mi, lobortis ac viverra non, auctor ac purus. ",
        "image":"./images/groot6.jpg",
        "price":"500 zl / h",
        "isAvailable":"true"
    }
  ];
      $scope.removeData = function(indexNum) {

        $scope.datas.splice(indexNum, 1);
        alert(datas.length);

      };
      $scope.addRow = function(){
          var dataRow =  {
        "id": "",
        "name":"",
        "description":"",
        "image":"",
        "price":"",
        "isAvailable":""
    };
        $scope.datas.push(dataRow);
      };
    }]);

})();
