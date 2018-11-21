<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;

class Profil
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

    public function List($request, $response, $args)
    {
        $param = $request->getParams();   
        $user = $this->em->getRepository("App\Entities\Utilisateur");
        $user = $user->findOneBy(["idUtilisateur" => $param["id"]]);
        $tab = $user->getIdConfiguration();

        $res = array();
        foreach($tab as $key => $value)
        {
            $res[$key] = array("id" => $value->getIdConfiguration(), "nom" => $value->getNom());
        }
        return $response->withJson($res); 
    }
}