import React from 'react';
import PropTypes from 'prop-types';
import css from "./Statistics.module.css"

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({stats, title}) => {

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}
      style={{
        backgroundColor: randomColor(),
         
        
              }}
      >
        {stats.map(statistic => (
          <li className={css.item} key={statistic.id}>
            <span className={css.label}>{statistic.label}</span>
            <span className={css.percentage}>{statistic.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};


Statistics.propTypes ={
   stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired 
    })
  )
}





