angular
    .module('altairApp')
    .controller('system_default',
        function ($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dt_data = [];
            vm.dtOptions = DTOptionsBuilder
                .newOptions()
                .withDisplayLength(10)
                .withOption('initComplete', function () {
                    $timeout(function () {
                        $compile($('.dt-uikit .md-input'))($scope);
                    })
                });
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3)
            ];
            $resource('data/system_data.json')
                .query()
                .$promise
                .then(function (dt_data) {
                    vm.dt_data = dt_data;
                });
        }
    );