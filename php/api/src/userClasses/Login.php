<?php

namespace App\userClasses;  
use Psr\Container\ContainerInterface;
use Doctrine\ORM\EntityManager;

class Login
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

    public function check($request, $response, $args)
    {
        $param = $request->getParams();   
        $user = $this->em->getRepository("App\Entities\Utilisateur");
        $user = $user->findOneBy(array("mail" => $param["email"]));
        
        if(strcmp($user->getMdp(), $param["mdp"]) == 0)
        {
            $response->withJson(array("ok"));
        }else{
            $response->withJson(array("ko"));
        }
        return $response;
    }
}