//var cities = [
//    {
//        city: 'Toronto',
//        desc: 'This is the best city in the world!',
//        lat: 43.7000,
//        long: -79.4000
//    },
//    {
//        city: 'New York',
//        desc: 'This city is aiiiiite!',
//        lat: 40.6700,
//        long: -73.9400
//    },
//    {
//        city: 'Chicago',
//        desc: 'This is the second best city in the world!',
//        lat: 41.8819,
//        long: -87.6278
//    },
//    {
//        city: 'Los Angeles',
//        desc: 'This city is live!',
//        lat: 34.0500,
//        long: -118.2500
//    },
//    {
//        city: 'Las Vegas',
//        desc: 'Sin City...\'nuff said!',
//        lat: 36.0800,
//        long: -115.1522
//    }
//];
//alert("I am in mapcontroller")
////Angular App Module and Controller
//angular.module('altairApp', [])
//.controller('mapCtrl', function ($scope) {

//    var mapOptions = {
//        zoom: 4,
//        center: new google.maps.LatLng(40.0000, -98.0000),
//        mapTypeId: google.maps.MapTypeId.TERRAIN
//    }

//    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

//    $scope.markers = [];

//    var infoWindow = new google.maps.InfoWindow();

//    var createMarker = function (info) {

//        var marker = new google.maps.Marker({
//            map: $scope.map,
//            position: new google.maps.LatLng(info.lat, info.long),
//            title: info.city
//        });
//        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

//        google.maps.event.addListener(marker, 'click', function () {
//            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
//            infoWindow.open($scope.map, marker);
//        });

//        $scope.markers.push(marker);

//    }

//    for (i = 0; i < cities.length; i++) {
//        createMarker(cities[i]);
//    }

//    $scope.openInfoWindow = function (e, selectedMarker) {
//        e.preventDefault();
//        google.maps.event.trigger(selectedMarker, 'click');
//    }

//});



//angular
//    .module('altairApp')
//    .controller('mapCtrl', [
//        '$rootScope',
//        '$scope',
//        '$timeout',
//        'messages',
//        'variables',
//        function ($rootScope,$scope,$timeout,messages,variables) {

//            $rootScope.toBarActive = true;

//            $scope.messages = messages;

//            var $map = $('#map');

//            // select message
//            $map
//                .on('ifChanged', '.select_message', function() {
//                    $(this).is(':checked') ? $(this).closest('li').addClass('md-card-list-item-selected') : $(this).closest('li').removeClass('md-card-list-item-selected');
//            });

//            // select all messages
//            $('#map_select_all').on('ifChanged', function () {
//                var $this = $(this);
//                $map.find('.select_message').each(function () {
//                    $this.is(':checked') ? $(this).iCheck('check') : $(this).iCheck('uncheck');
//                })
//            });

//            // show message details
//            $map.on('click', '.md-card-list ul > li', function (e) {

//                if ( !$(e.target).closest('.md-card-list-item-menu').length && !$(e.target).closest('.md-card-list-item-select').length ) {

//                    var $this = $(this);

//                    if (!$this.hasClass('item-shown')) {
//                        // get height of clicked message
//                        var el_min_height = $this.height() + $this.children('.md-card-list-item-content-wrapper').actual("height");

//                        // hide opened message
//                        $map.find('.item-shown').velocity("reverse", {
//                            begin: function (elements) {
//                                $(elements).removeClass('item-shown').children('.md-card-list-item-content-wrapper').hide().velocity("reverse");
//                            }
//                        });

//                        // show message
//                        $this.velocity({
//                            marginTop: 40,
//                            marginBottom: 40,
//                            marginLeft: -20,
//                            marginRight: -20,
//                            minHeight: el_min_height
//                        }, {
//                            duration: 300,
//                            easing: variables.easing_swiftOut,
//                            begin: function (elements) {
//                                $(elements).addClass('item-shown');
//                            },
//                            complete: function (elements) {
//                                // show: message content, reply form
//                                $(elements).children('.md-card-list-item-content-wrapper').show().velocity({
//                                    opacity: 1
//                                });

//                                // scroll to message
//                                var container = $('body'),
//                                    scrollTo = $(elements);
//                                container.animate({
//                                    scrollTop: scrollTo.offset().top - $('#page_content').offset().top - 8
//                                }, 1000, variables.bez_easing_swiftOut);

//                            }
//                        });
//                    }
//                }

//            });
//            // hide message on: outside click, esc button
//            $(document).on('click keydown', function(e) {
//                if (
//                    ( !$(e.target).closest('li.item-shown').length ) || e.which == 27
//                ) {
//                    $map.find('.item-shown').velocity("reverse", {
//                        begin: function(elements) {
//                            $(elements).removeClass('item-shown').children('.md-card-list-item-content-wrapper').hide().velocity("reverse");
//                        }
//                    });
//                }
//            });


//            // file upload (new message)
//            $timeout(function() {
//                var progressbar = $("#map_progressbar"),
//                    bar         = progressbar.find('.uk-progress-bar'),
//                    settings    = {
//                        action: './upload/', // upload url
//                        single: false,
//                        loadstart: function() {
//                            bar.css("width", "0%").text("0%");
//                            progressbar.removeClass("uk-hidden uk-progress-danger");
//                        },
//                        progress: function(percent) {
//                            percent = Math.ceil(percent);
//                            bar.css("width", percent+"%").text(percent+"%");
//                            if(percent == '100') {
//                                setTimeout(function(){
//                                    progressbar.addClass("uk-hidden");
//                                }, 1500);
//                            }
//                        },
//                        error: function(event) {
//                            progressbar.addClass("uk-progress-danger");
//                            bar.css({'width':'100%'}).text('100%');
//                        },
//                        abort: function(event) {
//                            console.log(event);
//                        },
//                        complete: function(response, xhr) {
//                            console.log(response);
//                        }
//                    };

//                var select = UIkit.uploadSelect($("#map_upload-select"), settings),
//                    drop   = UIkit.uploadDrop($("#map_upload-drop"), settings);
//            })

//        }
//    ])
//;

angular
    .module('altairApp')
    .controller('mapCtrl', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {

            $scope.drivingMode = false; // indicates streetview should be on driving mode
            $scope.drivingSpeed = 50; // 100 km per hour
            $scope.driverMode = false;

            $scope.origin = "1135 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman";
            $scope.destination = "Pier St, Jackson Bay, West Coast, New Zeland";

            var map;
            var updateFrequency = 1 * 1000; // half a second
            var savedPath = null;  // position and count to restart from pause mode

            // Overview path between orign and destination.
            // This does NOT exactly follow the path of a road. It is used to draw path on the map.
            var overviewPath = [];
            var overviewPathIndex = 0;  // current index points of overview path

            // Detailed path between overview path points
            // This does exactly follow the path of a road.
            var detailedPath = [];
            var detailedPathIndex = 0;  // current index points of detailed path

            var directionsService = new google.maps.DirectionsService();

            //
            // At google's mercy, we get points to drive
            //
            var driveOverviewPaths = function () {
                var op1, op2;
                // drive detailed path because we have not drove through all
                if (detailedPath.length > detailedPathIndex) {
                    driveDetailedPaths(); //SHOW TIME !!!!
                }
                    // drove all detailed path, get a new detailed path from overview paths
                else {
                    op1 = overviewPath[overviewPathIndex];
                    op2 = overviewPath[overviewPathIndex + 1];
                    overviewPathIndex += 1;
                    if (op1 && op2) {
                        var request = { origin: op1, destination: op2, travelMode: 'DRIVING' };
                        directionsService.route(request, function (response, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                detailedPath = response.routes[0].overview_path;
                                console.log('Updated detailedPath for overviewpath between',
                                    overviewPathIndex, 'and', overviewPathIndex + 1,
                                    'with', detailedPath.length, 'geo points');
                                detailedPathIndex = 0;
                                driveOverviewPaths();
                            }
                        });
                    }
                }
            };

            //
            // drive between two points by meter by meter and show it.
            //
            var driveDetailedPaths = function () {
                var meter = Math.floor(
                    (parseInt($scope.drivingSpeed, 10) * 1000) / 3600  // how far we deive every second
                    * (updateFrequency / 1000));                         // how often do we see streetview
                var point1 = detailedPath[detailedPathIndex];
                var point2 = detailedPath[detailedPathIndex + 1];

                if (point1 && point2) {
                    //calculate where to look from two points
                    var heading = google.maps.geometry.spherical.computeHeading(point1, point2);
                    var distance = google.maps.geometry.spherical.computeDistanceBetween(point1, point2);
                    var totalCount = parseInt(distance / meter, 10) || 1;

                    var drive = function (count, position) {
                        console.log(overviewPathIndex + '/' + overviewPath.length,
                            detailedPathIndex + '/' + detailedPath.length,
                            count + '/' + totalCount, 'distance', meter);
                        if (totalCount >= count) {
                            $timeout(function () {
                                var pov = map.getStreetView().getPov();
                                if ($scope.driverMode) {
                                    map.setHeading(heading); // map heading is different from pov heading
                                    pov.heading = heading;
                                }

                                map.getStreetView().setPosition(position);
                                map.getStreetView().setPov(pov);
                                map.getStreetView().setVisible(true);

                                var distanceToPoint2 = google.maps.geometry.spherical.computeDistanceBetween(position, point2);
                                var nextPosition = distanceToPoint2 < meter ?
                                    point2 : google.maps.geometry.spherical.computeOffset(position, meter, heading);
                                if ($scope.drivingMode) {
                                    drive(++count, nextPosition);
                                } else {
                                    savedPath = { count: count, position: position };
                                    return false;
                                }
                            }, updateFrequency);
                        } else {
                            detailedPathIndex += 1;
                            $scope.$emit('driveOverviewPath');
                        }
                    };

                    var count = (savedPath && savedPath.count) || 1;
                    var position = (savedPath && savedPath.position) || point1;
                    savedPath = null; // once start driving, nullify savedPath
                    drive(count, position);

                } else {
                    detailedPathIndex += 1;
                    $scope.$emit('driveOverviewPath');
                }
            };

            $scope.$on('driveOverviewPath', function () {
                driveOverviewPaths();
            });

            $scope.drive = function () {
                $scope.drivingMode = !$scope.drivingMode;
                if ($scope.drivingMode) {
                    map.setZoom(16);
                    if (savedPath) { // if continues
                        driveDetailedPaths();
                    } else {
                        $scope.$emit('driveOverviewPath');
                    }
                }
            };

            // When direction is changed
            // change overviewPath and reset driving directions
            $scope.directionsChanged = function () {
                overviewPath = this.directions.routes[0].overview_path;
                console.log('direction is changed', 'got overviewPath with', overviewPath.length, 'points');
                map.getStreetView().setPosition(overviewPath[0]);

                overviewPathIndex = 0; // set indexes to 0s
                detailedPathIndex = 0;
                $scope.drivingMode = false;   // stop driving
                toContinue = null;     // reset continuing positon
            };

            $scope.$on('mapInitialized', function (e, _map_) {
                map = _map_;
                window.map = map;
            });

            $scope.$on('$destroy', function () {
                $scope.drivingMode = false;
            });

        }
    ])
    .controller('gmap_neutralBlueCtrl', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
        }
    ])
    .controller('gmap_subtleGreyCtrl', [
        '$scope',
        '$timeout',
        function ($scope, $timeout) {
        }
    ]);