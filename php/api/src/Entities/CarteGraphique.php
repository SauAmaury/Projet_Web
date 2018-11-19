<?php

namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * CarteGraphique
 *
 * @ORM\Table(name="carte_graphique")
 * @ORM\Entity
 */
class CarteGraphique
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_carte_graphique", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="carte_graphique_id_carte_graphique_seq", allocationSize=1, initialValue=1)
     */
    private $idCarteGraphique;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=false)
     */
    private $nom;

    /**
     * @var string
     *
     * @ORM\Column(name="memoire", type="string", length=255, nullable=false)
     */
    private $memoire;

    /**
     * @var string
     *
     * @ORM\Column(name="generation", type="string", length=255, nullable=false)
     */
    private $generation;


    /**
     * Get idCarteGraphique
     *
     * @return integer 
     */
    public function getIdCarteGraphique()
    {
        return $this->idCarteGraphique;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return CarteGraphique
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
     * Set memoire
     *
     * @param string $memoire
     * @return CarteGraphique
     */
    public function setMemoire($memoire)
    {
        $this->memoire = $memoire;
    
        return $this;
    }

    /**
     * Get memoire
     *
     * @return string 
     */
    public function getMemoire()
    {
        return $this->memoire;
    }

    /**
     * Set generation
     *
     * @param string $generation
     * @return CarteGraphique
     */
    public function setGeneration($generation)
    {
        $this->generation = $generation;
    
        return $this;
    }

    /**
     * Get generation
     *
     * @return string 
     */
    public function getGeneration()
    {
        return $this->generation;
    }
}
