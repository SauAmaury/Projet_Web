<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Query\ResultSetMapping;

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

    public function ListGameConfigs($request, $response, $args)
    {
        $param = $request->getParams();

        $config = $this->em->getRepository("App\Entities\Configuration");
        $game = $this->em->getRepository("App\Entities\Jeux");

        $rsm = new ResultSetMapping();
        $rsm->addScalarResult("id_configuration","id_configuration");

        $query = $this->em->createNativeQuery('SELECT id_configuration FROM Jeux_Configuration WHERE marqueur = ? AND id_jeux = ?',$rsm);
        $query->setParameter(1,$param["marq"]);
        $query->setParameter(2,$param["idj"]);

        $config = $config->findOneBy(["idConfiguration" => $query->getResult()[0]]);

        return $response->withJson($config->getIdConfiguration()); 
    }


    
}