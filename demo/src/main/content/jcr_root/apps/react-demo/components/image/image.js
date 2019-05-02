import React, {Component} from 'react';
import {MapTo} from '@adobe/cq-react-editable-components';
 
require('./Image.css');
 
const ImageEditConfig = {
 
    emptyLabel: 'Image',
 
    isEmpty: function() {
        return !this.props || !this.props.src || this.props.src.trim().length < 1;
    }
};
 
class Image extends Component {
 
    render() {
        return (<img src={this.props.src}>);
    }
}
 
MapTo('react-demo/components/image')(Image, ImageEditConfig);
