<?php

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\ORM\Tools\Setup;
use Slim\Container;

$container = $app->getContainer();

$container[EntityManager::class] = function (Container $container): EntityManager {
    $config = Setup::createAnnotationMetadataConfiguration(
        $container['settings']['doctrine']['metadata_dirs'],
        $container['settings']['doctrine']['dev_mode']
    );

    $config->setMetadataDriverImpl(
        new AnnotationDriver(
            new AnnotationReader,
            $container['settings']['doctrine']['metadata_dirs']
        )
    );

    return EntityManager::create(
        $container['settings']['doctrine']['connection'],
        $config
    );
};

$container["App\userClasses\Test"] = function ($container) {
    return new \App\userClasses\Test($container[EntityManager::class]);
};

$container["App\userClasses\Login"] = function ($container) {
    return new \App\userClasses\Login($container[EntityManager::class], $container);
};

$container["App\userClasses\Profil"] = function ($container) {
    return new \App\userClasses\Profil($container[EntityManager::class], $container);
};