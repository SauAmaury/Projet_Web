<?php
// DIC configuration
//use App\Classes;

$container = $app->getContainer();

$container["Test"] = function ($container) {
    return new Test($container[EntityManager::class]);
};