<?php

//use App\Classes;

use Slim\Http\Request;

//Paramètres pour autoriser les requêtes du serveru Angular
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'http://localhost')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

//Connexion
$app->post('/login/check', 'App\userClasses\Login:check'); 

//Profil
$app->post('/profil/list', 'App\userClasses\Profil:list'); 

$app->post('/profil/list/devices', 'App\userClasses\Profil:listDevices'); 

$app->get('/profil/list/cg','App\userClasses\Profil:listAllCg');

$app->get('/profil/list/proc','App\userClasses\Profil:listAllProc');

$app->get('/profil/list/mem','App\userClasses\Profil:listAllMem');

$app->post('/profil/add','App\userClasses\Profil:addConf');

$app->post('/profil/modify','App\userClasses\Profil:modifConf');

$app->post('/profil/delete','App\userClasses\Profil:deleteConf');

//GameCheck
$app->get('/gameCheck/getGames','App\userClasses\GameCheck:ListGames');

$app->post('/gameCheck/getConf', 'App\userClasses\Profil:list'); 

$app->post('/gameCheck/games/conf', 'App\userClasses\GameCheck:ListGameConfigs'); 

//Forum

$app->get('/forum/sujet','App\userClasses\Forum:ListSujet');

$app->post('/forum/sujet/note','App\userClasses\Forum:changeNote');

$app->post('/forum/sujet/message','App\userClasses\Forum:ListSujetMessages');

//Paramètres pour autoriser les requêtes du serveru Angular
$app->map(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], '/{routes:.+}', function($req, $res) {
    $handler = $this->notFoundHandler; // handle using the default Slim page not found handler
    return $handler($req, $res);
});