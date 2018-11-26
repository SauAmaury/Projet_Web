<?php


namespace App\Entities;
use App\Entities;   
use Doctrine\ORM\Mapping as ORM;

/**
 * Jeux
 *
 * @ORM\Table(name="jeux")
 * @ORM\Entity
 */
class Jeux
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id_jeux", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="SEQUENCE")
     * @ORM\SequenceGenerator(sequenceName="jeux_id_jeux_seq", allocationSize=1, initialValue=3)
     */
    private $idJeux;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=255, nullable=false)
     */
    private $nom;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="annee", type="date", nullable=true)
     */
    private $annee;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Configuration", inversedBy="idJeux")
     * @ORM\JoinTable(name="jeux_configuration",
     *   joinColumns={
     *     @ORM\JoinColumn(name="id_jeux", referencedColumnName="id_jeux")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="id_configuration", referencedColumnName="id_configuration")
     *   }
     * )
     */
    private $idConfiguration;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idConfiguration = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Get idJeux
     *
     * @return integer 
     */
    public function getIdJeux()
    {
        return $this->idJeux;
    }

    /**
     * Set nom
     *
     * @param string $nom
     * @return Jeux
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
     * Set annee
     *
     * @param \DateTime $annee
     * @return Jeux
     */
    public function setAnnee($annee)
    {
        $this->annee = $annee;
    
        return $this;
    }

    /**
     * Get annee
     *
     * @return \DateTime 
     */
    public function getAnnee()
    {
        return $this->annee;
    }

    /**
     * Add idConfiguration
     *
     * @param \Configuration $idConfiguration
     * @return Jeux
     */
    public function addIdConfiguration(\Configuration $idConfiguration)
    {
        $this->idConfiguration[] = $idConfiguration;
    
        return $this;
    }

    /**
     * Remove idConfiguration
     *
     * @param \Configuration $idConfiguration
     */
    public function removeIdConfiguration(\Configuration $idConfiguration)
    {
        $this->idConfiguration->removeElement($idConfiguration);
    }

    /**
     * Get idConfiguration
     *
     * @return \Doctrine\Common\Collections\Collection 
     */
    public function getIdConfiguration()
    {
        return $this->idConfiguration;
    }
}
