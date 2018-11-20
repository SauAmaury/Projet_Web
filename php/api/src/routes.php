<?php

//use App\Classes;

use Slim\Http\Request;

$app->get('/test', 'App\userClasses\Test:show'); 

$app->get('/check', 'App\userClasses\Login:check'); 

$app->post('/login/check', 'App\userClasses\Login:check'); 
