<?php

namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Processeur
 *
 * @ORM\Table(name="processeur")
 * @ORM\Entity
 */
class Processeur
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_processeur", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="processeur_id_processeur_seq", allocationSize=1, initialValue=1)
     */
    private $idProcesseur;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=false)
     */
    private $nom;

    /**
     * @var integer
     *
     * @ORM\Column(name="generation", type="integer", nullable=false)
     */
    private $generation;

    /**
     * @var string
     *
     * @ORM\Column(name="cadence", type="decimal", precision=2, scale=1, nullable=false)
     */
    private $cadence;


    /**
     * Get idProcesseur
     *
     * @return integer 
     */
    public function getIdProcesseur()
    {
        return $this->idProcesseur;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Processeur
     */
    public function setNom($nom)
    {
        $this->nom = $nom;
    
        return $this;
    }

    /**
     * Get nom
     *
     * @return string 
     */
    public function getNom()
    {
        return $this->nom;
    }

    /**
     * Set generation
     *
     * @param integer $generation
     * @return Processeur
     */
    public function setGeneration($generation)
    {
        $this->generation = $generation;
    
        return $this;
    }

    /**
     * Get generation
     *
     * @return integer 
     */
    public function getGeneration()
    {
        return $this->generation;
    }

    /**
     * Set cadence
     *
     * @param string $cadence
     * @return Processeur
     */
    public function setCadence($cadence)
    {
        $this->cadence = $cadence;
    
        return $this;
    }

    /**
     * Get cadence
     *
     * @return string 
     */
    public function getCadence()
    {
        return $this->cadence;
    }
}
