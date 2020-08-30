import React from 'react';
import ImageCard from '../ImageCard/ImageCard.js'

import './style.css';

class Gallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
            images:[],
            currentadrr:"",
        }
    }

onAddressChange=(event)=>{
     this.setState(
        {
            currentadrr:event.target.value
        } 
     )

}

onAdding=() => {
//first copying previous image
const newimg=[...this.state.images]

//adding new img
newimg.push(this.state.currentadrr)

this.setState(
    {
        images:newimg,
        currentadrr:""
    }
)

}

render = () => {
    return(
        <div className="root-container">
            <h1 className="title">Welcome to your Gallery!</h1>
            <div className="input-box">
                <input onChange={this.onAddressChange} value={this.state.currentadrr} type="text" placeholder="Enter the url" />
                <button onClick={this.onAdding}>Add</button>
            </div>
        <div className="listbox">
            {
                this.state.images.map((url)=>{
                    return <ImageCard key={url} imgUrl={url} />

                })
            }
        </div>

        </div>


    )
}


}
export default Gallery;