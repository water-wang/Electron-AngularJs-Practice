angular.module('app')
    .controller('dynamicCtrl', ['$scope',
        function ($scope) {
            // TODO: Error: google.charts.load() cannot be called more than once with version 45 or earlier.
            google.charts.load('current', { packages: ['line'] });
            google.charts.setOnLoadCallback(InitDraw);

            function InitDraw() {
                var options = {
                    chart: {
                        title: 'TPS trade volumn statistic',
                        subtitle: 'data from tps cash',
                    },
                    width: '100%',
                    height: 600
                };

                var timeOptions = {
                    hour12: false
                };

                var chart = new google.charts.Line(document.getElementById('chart_div'));
                //google.visualization.events.addListener(chart, 'ready', refreshDataInterval);

                var data = new google.visualization.DataTable();
                data.addColumn('string', 'Time line of ' + (new Date()).toLocaleDateString());
                data.addColumn('number', 'GOVT Volumn');
                data.addColumn('number', 'MBS Volumn');

                data.addRow([(new Date()).toLocaleTimeString('en-US', timeOptions), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 500)]);

                chart.draw(data, options);

                function refreshDataInterval() {
                    setTimeout(function () {
                        if (data.getNumberOfRows() >= 10) {
                            data.removeRow(data.getNumberOfRows() - 10);
                        }
                        data.addRow([(new Date()).toLocaleTimeString('en-US', timeOptions), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 500)]);
                        chart.draw(data, options);
                    }, 1000);
                }

                $scope.addLineRow = function () {
                    if (data.getNumberOfRows() >= 10) {
                        data.removeRow(data.getNumberOfRows() - 10);
                    }
                    data.addRow([(new Date()).toLocaleTimeString('en-US', timeOptions), Math.floor(Math.random() * 1000), Math.floor(Math.random() * 500)]);
                    chart.draw(data, options);
                }
            }
        }]);