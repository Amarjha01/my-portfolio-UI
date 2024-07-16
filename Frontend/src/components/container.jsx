import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Container({ role, heading, paragraph, tools }) {
    return (
        <div className="container">
            <div className="inner-div">
                {role && <div className="portfolio">{role}</div>}
                {heading && <h2 className="container-heading">{heading}</h2>}
                {paragraph && <p className="container-paragraph">{paragraph}</p>}
                <FontAwesomeIcon icon={faArrowRight} className="containericon" />
            </div>
            {tools && <div className="tools">{tools}</div>}
        </div>
    );
}

export default Container;
