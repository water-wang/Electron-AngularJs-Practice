angular.module('app')
    .controller('dynamicCtrl', ['$scope', 'DynamicService',
        function ($scope, DynamicService) {
            // Check if line package is loaded.
            if (google.charts.Line) {
                InitDraw();
            } else {
                google.charts.load('current', { packages: ['line'] });
                google.charts.setOnLoadCallback(InitDraw);
            }

            var options = {
                chart: {
                    title: 'TPS trade volumn statistic',
                    subtitle: 'data from tps cash',
                },
                width: '100%',
                height: 600
            };

            function InitDraw() {
                var chart = new google.charts.Line(document.getElementById('chart_div'));
                google.visualization.events.addListener(chart, 'ready', refreshDataInterval);

                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Time line of ' + (new Date()).toLocaleDateString());
                data.addColumn('number', 'GOVT Volumn');
                data.addRow(['', 0]);

                chart.draw(data, options);

                function refreshDataInterval() {
                    setTimeout(function () {
                        DynamicService.GetTradeVolumn({ region: 'NAM', bizLine: 'GOVT' }).then(function (result) {
                            if (result && result.data) {
                                if (data.getNumberOfRows() >= 10) {
                                    data.removeRow(data.getNumberOfRows() - 10);
                                }
                                data.addRow([result.data.time, result.data.volumn]);

                                chart.draw(data, options);
                            }
                        }, function (errStatus) {
                            console.log(errStatus);
                        });
                    }, 1000);
                }

                $scope.addLineRow = function () {
                    if (data.getNumberOfRows() >= 10) {
                        data.removeRow(data.getNumberOfRows() - 10);
                    }
                    data.addRow([(new Date()).toLocaleTimeString('en-US', { hour12: false }), Math.floor(Math.random() * 1000)]);
                    chart.draw(data, options);
                }
            }
        }]);