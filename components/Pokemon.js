import styles from '../styles/Pokemon.module.css';

function Pokemon({name, type, image}) {
  const typeColors = {
    grass: '#DEFDE0',
    fire: '#FDDFDF',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
    ice: '#c0ecff',
    steel: '#717171',
  };

  const styleType = { backgroundColor: typeColors[type] || '#FFF' };

  return(
    <div className={styles.pokemon} style={styleType}>
      <div className={styles.imgContainer}>
        <img id="img-mock" src={image} alt={name} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <span>Type: <span>{type}</span></span>
      </div>
    </div>
  )
}

export default Pokemon