<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
  <head>
    <title>Simple Map</title>
    <meta name="viewport" content="initial-scale=1.0">
    
    <link href="<c:url value="/resources/css/main.css" />" rel="stylesheet">
    <script src="<c:url value="https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyB-oLAUYnPoxZ0kDIbzxGWRigbhw8Ll4co" />"></script>
    <script src="<c:url value="/resources/js/jquery-1.12.2.js" />"></script>
    <script src="<c:url value="/resources/js/testMap.js" />"></script>
  </head>
  <body>
    
   <div id="top_bar">
   </div>
  
  <div id="sub_top_page">
    <div id="side_bar">
    </div><!--
    --><div id="map">
     </div>
   </div>
  <div id="coords">
    <input type="text" name="lat" id="lat_box">
    <input type="text" name="lng" id="lng_box">
   </div>

    
  </body>
</html>
