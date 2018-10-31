<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Memoire
 *
 * @ORM\Table(name="memoire")
 * @ORM\Entity
 */
class Memoire
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_memoire", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="memoire_id_memoire_seq", allocationSize=1, initialValue=1)
     */
    private $idMemoire;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=false)
     */
    private $nom;

    /**
     * @var integer
     *
     * @ORM\Column(name="capacite", type="integer", nullable=false)
     */
    private $capacite;

    /**
     * @var string
     *
     * @ORM\Column(name="version", type="string", length=255, nullable=false)
     */
    private $version;


    /**
     * Get idMemoire
     *
     * @return integer 
     */
    public function getIdMemoire()
    {
        return $this->idMemoire;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Memoire
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
     * Set capacite
     *
     * @param integer $capacite
     * @return Memoire
     */
    public function setCapacite($capacite)
    {
        $this->capacite = $capacite;
    
        return $this;
    }

    /**
     * Get capacite
     *
     * @return integer 
     */
    public function getCapacite()
    {
        return $this->capacite;
    }

    /**
     * Set version
     *
     * @param string $version
     * @return Memoire
     */
    public function setVersion($version)
    {
        $this->version = $version;
    
        return $this;
    }

    /**
     * Get version
     *
     * @return string 
     */
    public function getVersion()
    {
        return $this->version;
    }
}
