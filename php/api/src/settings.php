<?php

// settings.php

define('APP_ROOT', __DIR__);

return [
    'settings' => [
        'displayErrorDetails' => true,
        'determineRouteBeforeAppMiddleware' => false,

        'doctrine' => [
            // if true, metadata caching is forcefully disabled
            'dev_mode' => true,


            // you should add any other path containing annotated entity classes
            'metadata_dirs' => [APP_ROOT . '/Entities'],

            'connection' => [
                'dbname' => 'postgres',
                'user' => 'postgres',
                'password' => 'simple',
                'host' => 'db',
                'driver' => 'pdo_pgsql'
            ]
        ]
    ]
            ];