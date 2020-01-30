import React from 'react';
import { sections } from './directory.data';

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
                this.state.sections.map(({title, imageUrl, id, size}) =>  
                    <MenuItem key={id} imageUrl= {imageUrl} title={title} size={size}/>
                )
            }
          </div>
        );
    }
}

export default Directory;