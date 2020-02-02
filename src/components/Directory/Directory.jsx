import React from 'react';
import { sections } from '../Data/directory.data';

import './Directory.styles.scss';
import MenuItem from '../MenuItem/MenuItem';

class Directory extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            sections: sections
        }
    }

    render(){
        return (
          <div className="directory-menu">
            {
                this.state.sections.map(({id, ...otherSectionProps}) =>  
                    <MenuItem key={id} {...otherSectionProps}/>
                )
            }
          </div>
        );
    }
}

export default Directory;