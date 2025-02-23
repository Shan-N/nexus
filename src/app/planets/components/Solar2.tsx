// import React from 'react';
// // import styles from './solar.module.css'; // Assuming you have a CSS module

// const planets = [
//     {
//       id: 1,
//       name: 'Mercury',
//       distance: '0.39 AU',
//       description: 'The closest planet to the sun. It circles the sun faster than all the other planets, which is why Romans named it after their swift-footed messenger god.',
//       details: 'Mercury is the closest planet to the sun...',
//       image: 'https://i2.wp.com/www.astronomytrek.com/wp-content/uploads/2012/11/mercury-1.jpg?fit=678%2C381&ssl=1',
//       facts: [
//         { title: 'A year on Mercury is just 88 days long.', description: 'One solar day on Mercury lasts the equivalent of 176 Earth days...' },
//         { title: 'Mercury is the smallest planet in the Solar System.', description: 'Mercury is just 4,879 Kilometres across its equator...' },
//       ],
//     },
//     {
//       id: 2,
//       name: 'Venus',
//       distance: '0.723 AU',
//       description: 'Named for the Roman goddess of love and beauty. In ancient times, Venus was often thought to be two different stars, the evening star and the morning star.',
//       details: 'Venus, the second planet from the sun...',
//       image: 'https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/2-whatistheave.jpg',
//       facts: [
//         { title: 'A day on Venus lasts longer than a year.', description: 'It takes 243 Earth days to rotate once on its axis...' },
//         { title: 'Venus rotates in the opposite direction to most other planets.', description: 'This means that Venus is rotating in the opposite direction to the Sun...' },
//       ],
//     },
//     // Add other planets here...
//   ];
// const SolarExplorer: React.FC = () => {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.logo}>
//         Solar explorer
//         <span>in only CSS</span>
//       </h1>

//       {/* Planet Selection */}
//       <div className={styles.planetSelection}>
//         {planets.map((planet) => (
//           <React.Fragment key={planet.id}>
//             <input
//               className={styles[`planet${planet.id}`]}
//               id={planet.name.toLowerCase()}
//               name="planet"
//               type="radio"
//             />
//             <label className={`${styles.menu} ${styles[planet.name.toLowerCase()]}`} htmlFor={planet.name.toLowerCase()}>
//               <div className={styles.preview}></div>
//               <div className={styles.info}>
//                 <h2>
//                   <div className={styles.pip}></div>
//                   {planet.name}
//                 </h2>
//                 <h3>{planet.distance} AU</h3>
//               </div>
//             </label>
//           </React.Fragment>
//         ))}
//       </div>

//       {/* Solar System */}
//       <div className={styles.solar}>
//         {planets.map((planet) => (
//           <div key={planet.id} className={styles.solarSystem}>
//             <div className={`${styles.planet} ${styles[planet.name.toLowerCase()]}`}>
//               <div className={`${styles.planetDescription} ${styles[planet.name.toLowerCase()]}`}>
//                 <h2>Planet</h2>
//                 <h1>{planet.name}</h1>
//                 <p>{planet.description}</p>
//                 <label htmlFor={`read${planet.name}`}>
//                   <a>
//                     Read More
//                     <span>e</span>
//                   </a>
//                 </label>
//               </div>
//               <div className={styles.overlay}></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Planet Panels */}
//       {planets.map((planet) => (
//         <React.Fragment key={planet.id}>
//           <input className={styles.read} id={`read${planet.name}`} name={`${planet.name.toLowerCase()}Read`} type="radio" />
//           <label className={styles.closeBig} htmlFor={`close${planet.name}`}></label>
//           <input className={styles.read} id={`close${planet.name}`} name={`${planet.name.toLowerCase()}Read`} type="radio" />
//           <div className={styles.panel}>
//             <h1>{planet.name}</h1>
//             <p>{planet.details}</p>
//             <img src={planet.image} alt={planet.name} />
//             {planet.facts.map((fact, index) => (
//               <React.Fragment key={index}>
//                 <h2>{fact.title}</h2>
//                 <p>{fact.description}</p>
//               </React.Fragment>
//             ))}
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

// export default SolarExplorer;