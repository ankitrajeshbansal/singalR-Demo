<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="SignalR.Web.index" %>

<!DOCTYPE html>
<html lang="en" ng-app="SignalRApp" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <link href="style/bootstrap-css/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
    <link href="style/bootstrap-css/bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet" />
    <link href="style/bootstrap-css/dist/css/timeline.css" rel="stylesheet" />
    <link href="style/bootstrap-css/bower_components/morrisjs/morris.css" rel="stylesheet" />
    <link href="style/bootstrap-css/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.css" rel="stylesheet">
    <link href="style/bootstrap-css/bower_components/datatables-responsive/css/dataTables.responsive.css" rel="stylesheet">
    <link href="style/bootstrap-css/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
    <link href="style/bootstrap-css/dist/css/sb-admin-2.css" rel="stylesheet" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
</head>
<body>
    <div id="wrapper" ng-controller="BaseCtrl as vm">

        <div ui-view></div>
    </div>
    <!--Jquery Reference-->
    <script src="scripts/vendor/jquery-2.0.3.js"></script>
    <script src="scripts/vendor/jquery-ui-1.10.3.js"></script>

    <!--Angular Reference-->
    <script src="scripts/vendor/angular.min.js"></script>
    <script src="scripts/vendor/angular-ui-router.min.js"></script>
    <script src="scripts/vendor/q.js"></script>

    <!--Application angular config Reference-->
    <script src="app/app.js"></script>
    <script src="app/appconfig.js"></script>
    <script src="app/appconfig-route.js"></script>

    <!--Angular App Controller Reference-->
    <script src="app/ui/devtest/devtest-controller.js"></script>
    <script src="app/ui/base-controller.js"></script>

    <!--Angular App Service Reference-->
    <script src="app/services/devtest-service.js"></script>

     <!--SingalR Reference-->
    <script src="scripts/jquery.signalR-2.2.0.js"></script>
    <script src="signalr/hubs" type="text/javascript"></script>

    <!--Other JS Reference-->
    <script src="scripts/common.js"></script>
    <script src="scripts/bootbox.min.js"></script>
    <script src="style/bootstrap-css/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="style/bootstrap-css/bower_components/metisMenu/dist/metisMenu.min.js"></script>
    <script src="style/bootstrap-css/dist/js/sb-admin-2.js"></script>
    <script src="style/bootstrap-css/bower_components/raphael/raphael.js"></script>
    <script src="style/bootstrap-css/bower_components/morrisjs/morris.js"></script>
    <script src="style/bootstrap-css/bower_components/datatables/media/js/jquery.dataTables.min.js"></script>
    <script src="style/bootstrap-css/bower_components/datatables-plugins/integration/bootstrap/3/dataTables.bootstrap.min.js"></script>

</body>
</html>

