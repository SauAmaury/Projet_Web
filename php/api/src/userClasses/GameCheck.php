<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;

class GameCheck
{
    /**
     * @var EntityManager
     */
    private $em;
    protected $container;

    public function __construct(EntityManager $em,ContainerInterface $container)
    {
        $this->em = $em;
        $this->container = $container;
    }

    public function ListGames($request, $response, $args)
    {

        $game = $this->em->getRepository("App\Entities\Jeux");

        $tab = $game->findAll();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdJeux(), "nom" => $value->getNom());
        }
        return $response->withJson($res); 
    }
    
}